#! /usr/bin/env node

// const { CLI_ACTIONS } = require("./src/constants");

(function () {
  const app = require("./src/app");
  const { dbInit } = require("./src/config/db.config");
  const path = require("node:path");

  process.env.ROOT_PATH = path.dirname(__filename);
  dbInit();
  app();
})();
