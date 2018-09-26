import assert from 'assert';
import generateRandomInteger from "./generateRandomInteger";

describe(`Generate random integer`, () => {
  it(`should integer in range (1 - 3)`, () => {
    for (let i = 0; i < 1000; i++) {
      assert([1, 2, 3].includes(generateRandomInteger(1, 3)));
    }
  });
});
