const fs = require("fs");
const mockData = require(".mockData.tsx");

const { users } = mockData;
const data = JSON.stringify({ users });
const filepath = "tools/db.json";

fs.writeFile(filepath, data, function(err: any) {
  err ? console.log(err) : console.log("MockDB created");
});
