class Expense {
  constructor(name, amount, type) {
    const currDate = new Date();

    this.name = name;
    this.amount = amount;
    // this.type = type;
    this.created_at = currDate.toISOString();
    this.updated_at = currDate.toISOString();
    this.id = currDate.getTime();
  }
}

module.exports = Expense;
