import assert from 'assert';
import checkAnswer from "./checkAnswer";

const state = Object.freeze({
  time: 0,
  lives: 3,
  level: 1,
  answerCorrectAmount: 0,
});

describe(`Check answer`, () => {
  it(`should increase state.level`, () => {
    assert.strictEqual(checkAnswer(state).level, 2);
  });
});
