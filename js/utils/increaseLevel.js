export default (state) => {
  const newState = Object.assign({}, state);
  newState.level++;
  return newState;
};
