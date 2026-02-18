const fs = require("node:fs");
const path = require("node:path");

function dbInit() {
  const filePath = path.join(process.env.ROOT_PATH, "assets", "db.json");
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify([]), { encoding: "utf-8" });
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  dbInit,
};
