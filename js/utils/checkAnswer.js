import selectScreen from "./selectScreen";
import increaseLevel from "./increaseLevel";

export default (state, levels, currentLevel, answer) => {
  let isCorrect;
  const levelOptions = currentLevel.answerOptions;

  switch (currentLevel.levelType) {
    case 1:
      isCorrect = !(answer.some((answer) => {
        const correct = levelOptions.find((option) => answer.url === option.url);
        return (answer.type !== correct.type);
      }));
      console.log(isCorrect ? `ПРАВИЛЬНО!!!` : `НЕ ПРАВИЛЬНО!!!`);
      break;

    case 2:
      isCorrect = (answer === currentLevel.answerOptions[0].type);
      console.log(isCorrect ? `ПРАВИЛЬНО!!!` : `НЕ ПРАВИЛЬНО!!!`);
      break;

    case 3:
      const answerType = levelOptions.find((option) => option.url === answer.src).type;
      isCorrect = (answerType === `paint`);
      console.log(answerType);
      console.log(isCorrect ? `ПРАВИЛЬНО!!!` : `НЕ ПРАВИЛЬНО!!!`);
  }

  const newState = increaseLevel(state);
  return selectScreen(newState, levels);
};
