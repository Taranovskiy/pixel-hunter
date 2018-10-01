import screensSelection from "./selectScreen";

export default (state, levels) => {
  const newState = Object.assign({}, state);
  newState.level++;
  return screensSelection(newState, levels);
};
