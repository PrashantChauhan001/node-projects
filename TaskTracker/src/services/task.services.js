const fs = require("node:fs/promises");
const path = require("node:path");
const Task = require("../models/taskModal");

// const getDbFilePath = () => {
//   return path.join(process.env.ROOT_PATH, "assets", "db.json");
// };

const getAllTask = async () => {
  const res = await fs.readFile(
    path.join(process.env.ROOT_PATH, "assets", "db.json"),
    { encoding: "utf-8" },
  );
  const data = JSON.parse(res);
  return Array.isArray(data) ? data : [];
};

const getTaskById = async (taskId) => {
  const taskList = await getAllTask();
  if (Array.isArray())
    return taskList.find((task) => task.id === taskId) || "Task not found";
  return "List not found";
};

const updateTaskList = async (taskList) => {
  if (Array.isArray(taskList)) {
    const res = await fs.writeFile(
      path.join(process.env.ROOT_PATH, "assets", "db.json"),
      JSON.stringify(taskList),
      {
        encoding: "utf-8",
      },
    );
    return res;
  }
  return "List not found";
};

const addTask = async (taskName) => {
  const task = new Task(taskName);
  const taskList = await getAllTask();
  taskList.push(task);
  await updateTaskList(taskList);
  console.log(task);
  return task;
};

const udpateTask = async (udpatedTask) => {
  if (!udpatedTask?.id) return;
  const taskList = await getAllTask();
  let data = null;
  const newList = taskList.map((task) => {
    if (task.id === udpatedTask.id) {
      data = { ...task, ...udpatedTask };
      return data;
    }
    return task;
  });
  const res = await updateTaskList(newList);
  return data || "No Task found";
};

module.exports = {
  getAllTask,
  getTaskById,
  updateTaskList,
  addTask,
  udpateTask,
};
