import assert from 'assert';
import setLives from "./setLives";
import {initialState} from "../data/data";

describe(`Set lives`, () => {
  it(`should update lives`, () => {
    assert.strictEqual(setLives(initialState, 1).lives, 1);
  });

  it(`shouldn't allow set negative lives`, () => {
    assert.throws(() => {
      setLives(initialState, -1);
    });
  });

  it(`should have 3 lives on start`, () => {
    assert.strictEqual(initialState.lives, 3);
  });
});
