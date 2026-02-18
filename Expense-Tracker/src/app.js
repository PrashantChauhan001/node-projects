const { Command } = require("commander");
const {
  addExpence,
  getExpenses,
  updateExpence,
  deleteExpence,
  getSummary,
} = require("./controller/expense.controller");
const { CLI_ACTIONS } = require("./constants");
const program = new Command();
function App() {
  program
    .name("exptr")
    .description("CLI to some JavaScript string utilities")
    .version("0.8.0");

  // add
  program
    .command(CLI_ACTIONS.ADD)
    .description("Add expenses with details")
    .requiredOption(
      "--desc, --description <string>",
      "Description for the expenses.",
    )
    .requiredOption("--amt, --amount <number>", "Amount of the expense.")
    .option("--cat, --category <type>", "Category to assign to the task")
    .action(addExpence);

  // list
  program
    .command(CLI_ACTIONS.LIST)
    .description("List expenses")
    .action(getExpenses);

  // update
  program
    .command(CLI_ACTIONS.UPDATE)
    .description("Update expense")
    .requiredOption("--id <number>", "Expense id")
    .option("--desc, --description <string>", "Description for the expenses.")
    .option("--amt, --amount <number>", "Amount of the expense.")
    .option("--cat, --category <type>", "Category to assign to the task")
    .action(updateExpence);
  program
    .command(CLI_ACTIONS.DELETE)
    .description("Delete expense")
    .requiredOption("--id <number>", "Expense id")
    .action(deleteExpence);

  program
    .command(CLI_ACTIONS.SUMMARY)
    .description("Get summary for expenses")
    .option("-m, --month <number>", "Month of the summary")
    .action(getSummary);

  program.parse();

  const opts = program.opts();
}

module.exports = App;
