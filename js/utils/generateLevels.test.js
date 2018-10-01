import assert from 'assert';
import generateLevels from "./generateLevels";
import {QUESTIONS_AMOUNT} from "../data/constants";

describe(`Generate levels`, () => {
  it(`should generate array of ${QUESTIONS_AMOUNT} elements`, () => {
    assert(generateLevels().length === QUESTIONS_AMOUNT);
  });

  it(`shouldn't contain undefined answerOptions.url element`, () => {
    assert.strictEqual(generateLevels().every((item) => {
      const findUrl = (it) => it.url;
      return item.answerOptions.every(findUrl);
    }), true);
  });
});
