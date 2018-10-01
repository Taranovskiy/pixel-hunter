import selectScreen from "./selectScreen";
import increaseLevel from "./increaseLevel";

export default (state, levels) => {
  const newState = increaseLevel(state);
  return selectScreen(newState, levels);
};
