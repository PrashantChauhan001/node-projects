const { TASK_STATUS } = require("../constants/app.constants");

class Task {
  constructor(task, status) {
    if (!task) throw new Error("Task required.");
    this.task = task;
    this.status = status || TASK_STATUS.TODO;
    this.created_at = new Date().toISOString();
    this.updated_at = new Date().toISOString();
    this.id = new Date().getTime();
  }
}
module.exports = Task;
