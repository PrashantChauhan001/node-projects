const DIFICULTY_LEVEL = {
  EASY: "easy",
  MEDIUM: "medium",
  HARD: "hard",
};

const LIFE_VS_LEVEL = {
  [DIFICULTY_LEVEL.EASY]: 8,
  [DIFICULTY_LEVEL.MEDIUM]: 5,
  [DIFICULTY_LEVEL.HARD]: 3,
};

module.exports = { DIFICULTY_LEVEL, LIFE_VS_LEVEL };
