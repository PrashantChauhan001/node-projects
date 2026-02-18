const {
  getAllExpenses,
  saveExpense,
  updateExpenceById,
  removeExpense,
} = require("../helper/db.helper");
const {
  getExpenseListByMonth,
  getExpenseSummary,
} = require("../helper/summary.helper");
const Expense = require("../model/expense.modal");

const addExpence = async (info, program) => {
  const { description, amount, category } = info;

  if (amount) {
    const amountNum = parseInt(amount);
    if (!amountNum || isNaN(amountNum))
      return console.log("Valid amount required");
    info.amount = amountNum;
  }
  const exp = new Expense(description, info.amount, category);
  const res = await saveExpense(exp);

  console.log("Expense added successfully");
  //   console.log(info.description, info.amount, in);
};

const updateExpence = async (info, program) => {
  const { description, amount, category, id } = info;
  const expId = parseInt(id);
  if (!id || isNaN(id)) return console.log("Valid Expense Id required");
  info.id = expId;
  if (!description && !amount && !category)
    return console.log("One field required for expense to update");

  if (amount) {
    const amountNum = parseInt(amount);
    if (!amountNum || isNaN(amountNum))
      return console.log("Valid amount required");
    info.amount = amountNum;
  }

  const res = await updateExpenceById(info);
  if (res) console.log("Expense Updated successfully");
};

const deleteExpence = async (info) => {
  const expId = parseInt(info.id);
  if (!expId || isNaN(expId)) return console.log("Valid Expense Id required");
  const res = await removeExpense(expId);
  if (res) console.log("Expense deleted successfully");
};

const getExpenses = async () => {
  const res = await getAllExpenses();
  console.table(res);
};

const getSummary = async (info) => {
  const month = parseInt(info.month);
  if (month && isNaN(month)) return console.log("Valid month required");
  let expList = await getAllExpenses();
  if (month) {
    expList = getExpenseListByMonth(expList, month);
  }
  const res = await getExpenseSummary(expList);
  console.log(`Expense Total: ${res} Rs.`);
};

module.exports = {
  addExpence,
  updateExpence,
  deleteExpence,
  getExpenses,
  deleteExpence,
  getSummary,
};
