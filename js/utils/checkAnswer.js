import isCorrect from "./isCorrect";

export default (state, levels, currentLevel, answerTime, answer) => {
  const isCorrectAnswer = isCorrect(currentLevel, answer);
  const newState = Object.assign({}, state);
  let statsItemValue;

  if (!isCorrectAnswer) {
    statsItemValue = `wrong`;
    newState.lives--;
    newState.score.wrong++;
  } else if (isCorrectAnswer && (answerTime < 10)) {
    statsItemValue = `fast`;
    newState.score.correct++;
    newState.score.fast++;
  } else if (isCorrectAnswer && (answerTime > 20)) {
    statsItemValue = `slow`;
    newState.score.correct++;
    newState.score.slow++;
  } else {
    statsItemValue = `correct`;
    newState.score.correct++;
  }

  newState.stats[state.level - 1] = statsItemValue;
  newState.level++;

  return newState;
};
