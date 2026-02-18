#! /usr/bin/env node

const fs = require("node:fs/promises");
const path = require("node:path");

const getUserActivity = async (userName) => {
  if (!userName) return;
  const res = await fetch(`https://api.github.com/users/${userName}/events`, {
    method: "get",
  }).then((res) => res.json());
  console.log(res);
  return res;
};

(function init() {
  const inputs = process.argv.slice(2);
  process.env.ROOT_PATH = path.dirname(__filename);
  console.log(inputs, "<==");
  if (inputs.length === 1) {
    const userName = inputs[0];
    getUserActivity(userName).then((res) => {});
  } else {
    fs.readFile(path.join(process.env.ROOT_PATH, "Readme.md"))
      .then((res) => res.toLocaleString())
      .then((res) => console.log(res));
  }
})();
