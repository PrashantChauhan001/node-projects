const fs = require("node:fs/promises");
const path = require("node:path");
const Expense = require("../model/expense.modal");

const getAllExpenses = async () => {
  const filePath = path.join(process.env.ROOT_PATH, "assets", "db.json");
  const data = (await fs.readFile(filePath, { encoding: "utf-8" })).toString();
  const res = JSON.parse(data);
  return Array.isArray(res) ? res : [];
};

const updateExpenseFile = async (data) => {
  if (!Array.isArray(data)) return;
  const filePath = path.join(process.env.ROOT_PATH, "assets", "db.json");
  const res = await fs.writeFile(filePath, JSON.stringify(data), {
    encoding: "utf-8",
  });
  return data;
};

const saveExpense = async (expense) => {
  const expenseList = await getAllExpenses();
  expenseList.push(expense);
  await updateExpenseFile(expenseList);
  return expense;
};

const getExpenseById = async (id) => {
  const expenseList = await getAllExpenses();
  return expenseList.find((exp) => exp.id === id);
};

const updateExpenceById = async (data) => {
  if (!data.id) return console.log("Expense id required");
  const expenseList = await getAllExpenses();
  let found = false;
  const newData = expenseList.map((exp) => {
    if (exp.id === data.id) {
      found = true;
      return { ...exp, ...data, updated_at: new Date().toISOString() };
    }
    return exp;
  });
  if (!found) return console.log("Expense not found");
  const res = await updateExpenseFile(newData);
  return res;
};

const removeExpense = async (id) => {
  if (!id) return console.log("Expense id required");
  const expenseList = await getAllExpenses();
  let found = false;
  const newData = expenseList.filter((exp) => {
    if (exp.id === id) {
      found = true;
      return false;
    }
    return true;
  });
  if (!found) return console.log("Expense not found");
  const res = await updateExpenseFile(newData);
  return res;
};

module.exports = {
  getAllExpenses,
  updateExpenseFile,
  saveExpense,
  getExpenseById,
  updateExpenceById,
  removeExpense,
};
