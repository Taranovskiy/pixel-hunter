import increaseLevel from "./increaseLevel";
import isCorrect from "./isCorrect";

export default (state, levels, currentLevel, answerTime, answer) => {
  const isCorrectAnswer = isCorrect(currentLevel, answer);
  const newState = Object.assign({}, state);
  let statsItemValue;

  if (!isCorrectAnswer) {
    statsItemValue = `wrong`;
    newState.lives--;
  } else if (isCorrectAnswer && (answerTime < 10)) {
    statsItemValue = `fast`;
  } else if (isCorrectAnswer && (answerTime > 20)) {
    statsItemValue = `slow`;
  } else {
    statsItemValue = `correct`;
  }

  newState.stats[state.level - 1] = statsItemValue;

  return increaseLevel(newState);
};
