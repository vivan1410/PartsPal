const express = require("express");
const cors = require("cors");
const db = require("./database");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "PartsPal backend is running" });
});

app.get("/api/parts", (req, res) => {
    const { search = "", category = "" } = req.query;

    let query = "SELECT * FROM parts WHERE 1=1";
    const params = [];

    if (search) {
        query += " AND name LIKE ?";
        params.push(`%${search}%`);
    }

    if (category) {
        query += " AND category = ?";
        params.push(category);
    }

    const parts = db.prepare(query).all(...params);

    res.json(parts);
});

app.post("/api/parts", (req, res) => {
    const { name, category, total } = req.body;

    if (!name || !category || !Number.isInteger(total) || total <= 0) {
        return res.status(400).json({
            message: "Name, category and a positive whole number for total are required"
        });
    }

    const result = db.prepare(`
        INSERT INTO parts (name, category, total, available)
        VALUES (?, ?, ?, ?)
    `).run(name, category, total, total);

    res.status(201).json({
        message: "Part added successfully",
        id: result.lastInsertRowid
    });
});

app.patch("/api/parts/:id/stock", (req, res) => {
    const partId = Number(req.params.id);
    const { quantity } = req.body;
    const qty = Number(quantity);

    if (!Number.isInteger(partId)) {
        return res.status(400).json({
            message: "Invalid part ID"
        });
    }

    if (!Number.isInteger(qty) || qty <= 0) {
        return res.status(400).json({
            message: "Quantity to add must be a positive whole number"
        });
    }

    const part = db.prepare("SELECT * FROM parts WHERE id = ?").get(partId);

    if (!part) {
        return res.status(404).json({
            message: "Part not found"
        });
    }

    try {
        db.exec("BEGIN");

        db.prepare(`
            UPDATE parts
            SET total = total + ?,
                available = available + ?
            WHERE id = ?
        `).run(qty, qty, partId);

        const updatedPart = db.prepare("SELECT * FROM parts WHERE id = ?").get(partId);

        db.exec("COMMIT");

        res.json({
            message: `${qty} ${part.name} added to inventory`,
            part: updatedPart
        });
    } catch (error) {
        db.exec("ROLLBACK");
        res.status(500).json({
            message: "Failed to update stock"
        });
    }
});

app.get("/api/kits", (req, res) => {
    const kits = db.prepare(`
        SELECT
            kits.id AS kit_id,
            kits.name AS kit_name,
            parts.id AS part_id,
            parts.name AS part_name,
            kit_parts.quantity
        FROM kits
        JOIN kit_parts ON kits.id = kit_parts.kit_id
        JOIN parts ON kit_parts.part_id = parts.id
        ORDER BY kits.id, parts.id
    `).all();

    const result = {};

    for (const row of kits) {
        if (!result[row.kit_id]) {
            result[row.kit_id] = {
                id: row.kit_id,
                name: row.kit_name,
                parts: []
            };
        }

        result[row.kit_id].parts.push({
            id: row.part_id,
            name: row.part_name,
            quantity: row.quantity
        });
    }

    res.json(Object.values(result));
});

app.post("/api/issues", (req, res) => {
    const {
        memberName,
        registrationNumber,
        dueDate,
        kitId,
        partId,
        quantity
    } = req.body;

    if (!memberName || !registrationNumber || !dueDate) {
        return res.status(400).json({
            message: "Member name, registration number and due date are required"
        });
    }

    // Individual Part Issue Mode
    if (partId !== undefined && partId !== null && partId !== "") {
        const parsedPartId = Number(partId);
        const issueQty = Number(quantity) || 1;

        if (!Number.isInteger(parsedPartId) || issueQty <= 0) {
            return res.status(400).json({
                message: "Valid part ID and positive quantity are required"
            });
        }

        const part = db.prepare(`
            SELECT id, name, available
            FROM parts
            WHERE id = ?
        `).get(parsedPartId);

        if (!part) {
            return res.status(404).json({
                message: "Part not found"
            });
        }

        if (part.available < issueQty) {
            return res.status(400).json({
                message: `Cannot issue part. Requested ${issueQty}, but only ${part.available} available.`
            });
        }

        try {
            db.exec("BEGIN");

            db.prepare(`
                UPDATE parts
                SET available = available - ?
                WHERE id = ?
            `).run(issueQty, parsedPartId);

            const issue = db.prepare(`
                INSERT INTO issues (
                    member_name,
                    registration_number,
                    due_date,
                    part_id,
                    quantity,
                    returned
                )
                VALUES (?, ?, ?, ?, ?, 0)
            `).run(
                memberName,
                registrationNumber,
                dueDate,
                parsedPartId,
                issueQty
            );

            db.exec("COMMIT");

            return res.status(201).json({
                message: "Part issued successfully",
                issueId: issue.lastInsertRowid,
                part: part.name,
                member: memberName
            });
        } catch (error) {
            db.exec("ROLLBACK");
            return res.status(500).json({
                message: "Failed to issue part"
            });
        }
    }

    // Kit Issue Mode
    const parsedKitId = Number(kitId);
    if (!Number.isInteger(parsedKitId)) {
        return res.status(400).json({
            message: "Kit ID or Part ID is required"
        });
    }

    const kit = db.prepare(`
        SELECT id, name
        FROM kits
        WHERE id = ?
    `).get(parsedKitId);

    if (!kit) {
        return res.status(404).json({
            message: "Kit not found"
        });
    }

    const kitParts = db.prepare(`
        SELECT
            parts.id,
            parts.name,
            parts.available,
            kit_parts.quantity
        FROM kit_parts
        JOIN parts ON kit_parts.part_id = parts.id
        WHERE kit_parts.kit_id = ?
    `).all(parsedKitId);

    if (kitParts.length === 0) {
        return res.status(400).json({
            message: "Kit has no parts"
        });
    }

    const unavailablePart = kitParts.find(
        part => part.available < part.quantity
    );

    if (unavailablePart) {
        return res.status(400).json({
            message: `Cannot issue kit. ${unavailablePart.name} is unavailable.`
        });
    }

    try {
        db.exec("BEGIN");

        for (const part of kitParts) {
            db.prepare(`
                UPDATE parts
                SET available = available - ?
                WHERE id = ?
            `).run(part.quantity, part.id);
        }

        const issue = db.prepare(`
            INSERT INTO issues (
                member_name,
                registration_number,
                due_date,
                kit_id,
                quantity,
                returned
            )
            VALUES (?, ?, ?, ?, 1, 0)
        `).run(
            memberName,
            registrationNumber,
            dueDate,
            parsedKitId
        );

        db.exec("COMMIT");

        res.status(201).json({
            message: "Kit issued successfully",
            issueId: issue.lastInsertRowid,
            kit: kit.name,
            member: memberName
        });
    } catch (error) {
        db.exec("ROLLBACK");

        res.status(500).json({
            message: "Failed to issue kit"
        });
    }
});

app.patch("/api/issues/:id/return", (req, res) => {
    const issueId = Number(req.params.id);

    if (!Number.isInteger(issueId)) {
        return res.status(400).json({
            message: "Invalid issue ID"
        });
    }

    const issue = db.prepare(`
        SELECT *
        FROM issues
        WHERE id = ?
    `).get(issueId);

    if (!issue) {
        return res.status(404).json({
            message: "Issue not found"
        });
    }

    if (issue.returned === 1) {
        return res.status(400).json({
            message: "This item has already been returned"
        });
    }

    try {
        db.exec("BEGIN");

        if (issue.part_id) {
            db.prepare(`
                UPDATE parts
                SET available = available + ?
                WHERE id = ?
            `).run(issue.quantity || 1, issue.part_id);
        } else if (issue.kit_id) {
            const kitParts = db.prepare(`
                SELECT
                    parts.id,
                    parts.name,
                    kit_parts.quantity
                FROM kit_parts
                JOIN parts ON kit_parts.part_id = parts.id
                WHERE kit_parts.kit_id = ?
            `).all(issue.kit_id);

            for (const part of kitParts) {
                db.prepare(`
                    UPDATE parts
                    SET available = available + ?
                    WHERE id = ?
                `).run(part.quantity, part.id);
            }
        }

        db.prepare(`
            UPDATE issues
            SET returned = 1
            WHERE id = ?
        `).run(issueId);

        db.exec("COMMIT");

        res.json({
            message: "Returned successfully",
            issueId: issueId
        });
    } catch (error) {
        db.exec("ROLLBACK");

        res.status(500).json({
            message: "Failed to return item"
        });
    }
});

app.get("/api/issues", (req, res) => {
    const { status } = req.query;

    let query = `
        SELECT
            issues.id,
            issues.member_name,
            issues.registration_number,
            issues.due_date,
            issues.returned,
            issues.quantity,
            issues.kit_id,
            issues.part_id,
            kits.name AS kit_name,
            parts.name AS part_name,
            COALESCE(kits.name, parts.name) AS item_name
        FROM issues
        LEFT JOIN kits ON issues.kit_id = kits.id
        LEFT JOIN parts ON issues.part_id = parts.id
    `;

    if (status === "overdue") {
        query += `
            WHERE issues.returned = 0
            AND date(issues.due_date) < date('now')
        `;
    }

    query += " ORDER BY issues.id DESC";

    const issues = db.prepare(query).all();

    res.json(issues);
});

const PORT = 5000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});