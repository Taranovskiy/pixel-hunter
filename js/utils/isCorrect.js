export default (currentLevel, answer) => {
  let isCorrect;
  const levelOptions = currentLevel.answerOptions;

  switch (currentLevel.levelType) {
    case 1:
      isCorrect = !(answer.some((answerItem) => {
        const correct = levelOptions.find((option) => answerItem.url === option.url);
        return (answerItem.type !== correct.type);
      }));
      break;

    case 2:
      isCorrect = (answer === currentLevel.answerOptions[0].type);
      break;

    case 3:
      isCorrect = levelOptions.find((option) => option.url === answer.src).type === `paint`;
      break;
  }
  return isCorrect;
};
