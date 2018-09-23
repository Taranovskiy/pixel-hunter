export default (state, lives) => {
  if (lives < 0) {
    throw new RangeError(`Can't set negative lives`);
  }
  const newState = Object.assign({}, state, {lives});
  return newState;
};
