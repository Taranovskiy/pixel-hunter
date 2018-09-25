import assert from 'assert';
import generateRandomInteger from "./generateRandomInteger";

describe(`Generate random integer`, () => {
  it(`should integer in range (1 - 3)`, () => {
    assert(generateRandomInteger(1, 3) in [1, 2, 3]);
  });
});
