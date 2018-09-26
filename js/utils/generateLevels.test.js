import assert from 'assert';
import generateLevels from "./generateLevels";

describe(`Generate levels`, () => {
  it(`should generate array of 10 elements`, () => {
    assert(generateLevels().length === 10);
  });

  it(`shouldn't contain undefined answerOptions.url element`, () => {
    assert.strictEqual(generateLevels().every((item) => {
      const findUrl = (it) => it.url;
      return item.answerOptions.every(findUrl);
    }), true);
  });
});
