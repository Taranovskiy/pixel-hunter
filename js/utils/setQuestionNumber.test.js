import assert from 'assert';
import setQuestionNumber from "./setQuestionNumber";
import {initialState} from "../data/data";

describe(`Set number of question`, () => {
  it(`number of question should increase by one`, () => {
    assert.strictEqual(setQuestionNumber(initialState).questionNumber, 2);
  });
});
