export default (state) => {
  const newState = Object.assign({}, state);
  newState.questionNumber++;
  return newState;
};
