import assert from 'assert';
import setLives from "./setLives";

describe(`Set lives`, () => {
  it(`should update lives`, () => {
    assert.strictEqual(setLives(initialState, 1).lives, 1);
  });
});
