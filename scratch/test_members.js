const http = require("http");

http.get("http://localhost:5000/api/issues", (res) => {
  let data = "";
  res.on("data", (chunk) => (data += chunk));
  res.on("end", () => {
    try {
      const issues = JSON.parse(data);
      console.log(`Fetched ${issues.length} issues from backend.`);

      const todayStr = new Date().toISOString().split("T")[0];
      const membersMap = {};

      issues.forEach((issue) => {
        const reg = (issue.registration_number || "").trim();
        if (!reg) return;
        const regKey = reg.toLowerCase();
        if (!membersMap[regKey]) {
          membersMap[regKey] = {
            memberName: issue.member_name || "Unknown Member",
            registrationNumber: reg,
            total: 0,
            active: 0,
            returned: 0,
            overdue: 0
          };
        }
        membersMap[regKey].total += 1;
        if (issue.returned === 1) {
          membersMap[regKey].returned += 1;
        } else if (issue.due_date < todayStr) {
          membersMap[regKey].overdue += 1;
        } else {
          membersMap[regKey].active += 1;
        }
      });

      const membersList = Object.values(membersMap);
      console.log("\n--- Unique Members Breakdown ---");
      console.log(`Total Members: ${membersList.length}`);
      console.log(`Active Borrowers: ${membersList.filter(m => m.active > 0 || m.overdue > 0).length}`);
      console.log(`Overdue Members: ${membersList.filter(m => m.overdue > 0).length}`);
      console.log(`Total Active Issues: ${issues.filter(i => i.returned === 0).length}`);

      console.log("\n--- Member Details ---");
      membersList.forEach((m) => {
        console.log(`Member: ${m.memberName} (${m.registrationNumber}) -> Total: ${m.total}, Active: ${m.active}, Returned: ${m.returned}, Overdue: ${m.overdue}`);
      });
    } catch (e) {
      console.error("Error parsing issues:", e);
    }
  });
});
