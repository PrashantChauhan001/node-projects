const fs = require("node:fs/promises");
const path = require("node:path");

const getArguments = () => {
  if (Array.isArray(process.argv)) return process.argv;
  return [];
};

const getExampleData = async () => {
  const filePath = path.join(process.env.ROOT_PATH, "assets", "examples.txt");
  const res = await fs.readFile(filePath);
  console.log(res.toLocaleString());
};

module.exports = {
  getArguments,
  getExampleData,
};
