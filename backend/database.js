const { DatabaseSync } = require("node:sqlite");

const db = new DatabaseSync("partspal.db");

db.exec(`
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS parts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    total INTEGER NOT NULL,
    available INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS kits (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS kit_parts (
    kit_id INTEGER NOT NULL,
    part_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    PRIMARY KEY (kit_id, part_id),
    FOREIGN KEY (kit_id) REFERENCES kits(id),
    FOREIGN KEY (part_id) REFERENCES parts(id)
);

CREATE TABLE IF NOT EXISTS issues (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    member_name TEXT NOT NULL,
    registration_number TEXT NOT NULL,
    due_date TEXT NOT NULL,
    kit_id INTEGER,
    part_id INTEGER,
    quantity INTEGER NOT NULL DEFAULT 1,
    returned INTEGER NOT NULL DEFAULT 0,
    FOREIGN KEY (kit_id) REFERENCES kits(id),
    FOREIGN KEY (part_id) REFERENCES parts(id)
);
`);

const count = db.prepare("SELECT COUNT(*) AS count FROM parts").get();

if (count.count === 0) {
    db.exec(`
    INSERT INTO parts (name, category, total, available) VALUES
    ('Arduino Uno', 'Microcontroller', 10, 10),
    ('IR Sensor', 'Sensor', 20, 20),
    ('Motor Driver', 'Motor', 10, 10),
    ('Ultrasonic Sensor', 'Sensor', 15, 15),
    ('Servo Motor', 'Motor', 10, 10);
    `);
} else {
    const servoExists = db.prepare("SELECT * FROM parts WHERE name = 'Servo Motor'").get();
    if (!servoExists) {
        db.prepare("INSERT INTO parts (name, category, total, available) VALUES ('Servo Motor', 'Motor', 10, 10)").run();
    }
}

const kitCount = db.prepare("SELECT COUNT(*) AS count FROM kits").get();

if (kitCount.count === 0) {
    db.exec(`
    INSERT INTO kits (name)
    VALUES ('Line Follower Kit');
    `);

    db.exec(`
    INSERT INTO kit_parts (kit_id, part_id, quantity) VALUES
    (1, 1, 1),
    (1, 2, 2),
    (1, 3, 1);
    `);
}

// Seed Obstacle Avoidance Kit
const obstacleKitExists = db.prepare("SELECT * FROM kits WHERE name = 'Obstacle Avoidance Kit'").get();
if (!obstacleKitExists) {
    const res = db.prepare("INSERT INTO kits (name) VALUES ('Obstacle Avoidance Kit')").run();
    const kitId = res.lastInsertRowid;
    const arduino = db.prepare("SELECT id FROM parts WHERE name = 'Arduino Uno'").get();
    const ultrasonic = db.prepare("SELECT id FROM parts WHERE name = 'Ultrasonic Sensor'").get();
    const motorDriver = db.prepare("SELECT id FROM parts WHERE name = 'Motor Driver'").get();

    if (arduino && ultrasonic && motorDriver) {
        db.prepare("INSERT INTO kit_parts (kit_id, part_id, quantity) VALUES (?, ?, ?)").run(kitId, arduino.id, 1);
        db.prepare("INSERT INTO kit_parts (kit_id, part_id, quantity) VALUES (?, ?, ?)").run(kitId, ultrasonic.id, 1);
        db.prepare("INSERT INTO kit_parts (kit_id, part_id, quantity) VALUES (?, ?, ?)").run(kitId, motorDriver.id, 1);
    }
}

// Seed Servo Control Kit
const servoKitExists = db.prepare("SELECT * FROM kits WHERE name = 'Servo Control Kit'").get();
if (!servoKitExists) {
    const res = db.prepare("INSERT INTO kits (name) VALUES ('Servo Control Kit')").run();
    const kitId = res.lastInsertRowid;
    const arduino = db.prepare("SELECT id FROM parts WHERE name = 'Arduino Uno'").get();
    const servo = db.prepare("SELECT id FROM parts WHERE name = 'Servo Motor'").get();

    if (arduino && servo) {
        db.prepare("INSERT INTO kit_parts (kit_id, part_id, quantity) VALUES (?, ?, ?)").run(kitId, arduino.id, 1);
        db.prepare("INSERT INTO kit_parts (kit_id, part_id, quantity) VALUES (?, ?, ?)").run(kitId, servo.id, 2);
    }
}

console.log("Database connected");

module.exports = db;