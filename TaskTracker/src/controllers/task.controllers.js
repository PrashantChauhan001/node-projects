const { CLI_ARGUMENTS, TASK_STATUS } = require("../constants/app.constants");
const {
  addTask,
  getAllTask,
  updateTaskList,
  getTaskById,
} = require("../services/task.services");
const { getExampleData } = require("../utils/common.utils");

const { ADD, DELETE, LIST, UPDATE } = CLI_ARGUMENTS.CLI_ACTIONS;

const handleTaskInput = (action, inputs) => {
  if (!Array.isArray(inputs)) return getExampleData();
  switch (action) {
    case ADD:
      handleAddAction(inputs);
      break;
    case LIST:
      handleListAction(inputs);
      break;
    case DELETE:
      handleDeleteAction(inputs);
      break;
    case UPDATE:
      handleUpdateAction(inputs);
      break;
    default:
      return getExampleData();
      break;
  }
};

const handleAddAction = async (inputs) => {
  if (!inputs[1]) return getExampleData();
  const res = await addTask(inputs[1]);
  return res;
};

const handleListAction = async (inputs) => {
  const status = inputs[1];
  const statusList = Object.values(TASK_STATUS);
  const res = await getAllTask();
  let data = res;
  if (status && statusList.includes(status)) {
    data = data.filter((task) => task.status === status);
  }
  return console.log(data);
};
const handleDeleteAction = async (inputs) => {
  const id = parseInt(inputs[1]);
  if (!id && !isNaN(id)) {
    console.log("Task id required.");
    return;
  }
  const data = await getTaskById(id);
  if (data) {
    const list = await getAllTask();
    await updateTaskList(
      list.filter((task) => {
        console.log(typeof task.id, task.id, "<==task.id", typeof id, id);
        return task.id !== id;
      }),
    );
    console.log("Task deleted successfully.");
  } else console.log("Task not found");
};
const handleUpdateAction = async (inputs) => {
  const id = parseInt(inputs[1]);
  if (!id && !isNaN(id)) {
    console.log("Task id required.");
    return;
  }
  const data = await getTaskById(id);
  if (data) {
    const list = await getAllTask();
    const keyToUpdate = inputs[2];
    const value = inputs[3];
    const data = { [keyToUpdate]: value, updated_at: new Date().toISOString() };
    const statusList = Object.values(TASK_STATUS);
    if (
      (keyToUpdate === "name" && value && typeof value === "string") ||
      (keyToUpdate === "status" && value && statusList.includes(value))
    ) {
      await updateTaskList(
        list.map((task) => {
          if (task.id === id) {
            return { ...task, ...data };
          }
          return task;
        }),
      );
      console.log("Task updated successfully.");
    } else getExampleData();
  } else console.log("Task not found");
};

module.exports = { handleTaskInput };
