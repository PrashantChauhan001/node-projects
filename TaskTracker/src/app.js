const { getArguments, getExampleData } = require("./utils/common.utils");
const { handleTaskInput } = require("./controllers/task.controllers");

const init = () => {
  const userInputs = getArguments();
  if (userInputs.length > 2) {
    const inputs = userInputs.slice(2);
    console.log(inputs, "<==");
    if (!inputs[0]) return getExampleData();
    handleTaskInput(inputs[0], inputs);
  } else {
    getExampleData();
  }
};

module.exports = init;
