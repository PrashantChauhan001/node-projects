const { DIFICULTY_LEVEL, LIFE_VS_LEVEL } = require("./constant");
const readline = require("node:readline/promises");
const { stdin: input, stdout: output } = require("node:process");
const rlI = readline.createInterface({ input, output });

async function init(level) {
  console.log("Welcome to the Number Guessing Game!");
  if (!level) level = await getLevel();

  const res = await startGame(LIFE_VS_LEVEL[level]);

  if (res && typeof res === "boolean") {
    console.log("Congratulations!!!, You have won.");
  } else {
    console.log("Opps!, you lost. Correct number is: " + res);
  }
  const playAgain = await rlI
    .question(
      `Want to play again?
    1. Yes
    2. Yes (change difficulty)
    3. No

    Enter your choice: `,
    )
    .then((res) => parseInt(res));
  switch (playAgain) {
    case 1:
      await init(level);
      break;
    case 2:
      await init();
      break;
  }
  rlI.close();
}

const getLevel = async () => {
  const levelInput = await rlI
    .question(
      `Please select option to set difficulty level:
    1. Easy (8 chances)
    2. Medium (5 chances)
    3. Hard (3 chances)

    Enter your choice: `,
    )
    .then((res) => parseInt(res));
  let level = null;

  switch (levelInput) {
    case 1:
      level = DIFICULTY_LEVEL.EASY;
      break;
    case 2:
      level = DIFICULTY_LEVEL.MEDIUM;
      break;
    case 3:
      level = DIFICULTY_LEVEL.HARD;
      break;
  }
  if (level) {
    console.log("Selected Level is: " + level + "\n");
    console.log(
      "You will get " + LIFE_VS_LEVEL[level] + " try to guess right number.",
    );
    return level;
  } else {
    console.log("Plese select valid level options.");
    return getLevel();
  }
};

const startGame = async (tryCount) => {
  const randomNum = Math.round(Math.random() * 10) || 1;
  let prevNum = null;
  console.log("We have guessed a number between 0 to 10?");
  console.log(randomNum.toLocaleString());
  while (tryCount > 0) {
    const res = await receiveGuess({
      prevNum,
      randomNum,
    });
    if (res !== null) {
      if (res === randomNum) {
        return true;
      }
      prevNum = res;
      tryCount--;
    } else console.log("Enter correct input: ");
  }
  return randomNum;
};

const receiveGuess = async ({ prevNum, randomNum }) => {
  const res = await rlI
    .question(
      prevNum
        ? "Want Hint? Enter y. or Guess the number: "
        : "Guess the number: ",
    )
    .then(async (res) => {
      if (res === "y") {
        console.log(
          "Correct number is " +
            (randomNum > prevNum ? "Higher" : "Lower") +
            " than given number.",
        );
        const int = await rlI
          .question("Guess the number to win: ")
          .then((res) => parseInt(res));
        return int;
      }

      return parseInt(res);
    });
  if (!isNaN(res)) {
    return res;
  }
  return null;
};

module.exports = init;
