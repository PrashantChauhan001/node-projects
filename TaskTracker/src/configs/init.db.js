const fs = require("node:fs");
const path = require("node:path");

const startDb = () => {
  try {
    const dbFilePath = path.join(process.env.ROOT_PATH, "assets", "db.json");
    if (!fs.existsSync(dbFilePath)) {
      fs.writeFileSync(dbFilePath, JSON.stringify([]), { encoding: "utf-8" });
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = startDb;
