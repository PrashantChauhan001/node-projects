const getExpenseSummary = (expList) => {
  if (!Array.isArray(expList)) return console.log("Expense list required");
  return expList.reduce((prev, curr) => prev + (curr?.amount || 0), 0);
};

const getExpenseListByMonth = (list, month) => {
  if (!Array.isArray(list)) return console.log("Expense list required");
  return list.filter(
    (exp) => new Date(exp.created_at).getMonth() + 1 === month,
  );
};

module.exports = {
  getExpenseListByMonth,
  getExpenseSummary,
};
