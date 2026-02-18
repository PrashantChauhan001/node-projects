#! /usr/bin/env node

const startDb = require("./src/configs/init.db");
const app = require("./src/app");
const path = require("node:path");
try {
  process.env.ROOT_PATH = path.dirname(__filename);
  startDb();
  app();
} catch (error) {
  console.log(error);
}
