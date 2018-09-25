import {QUESTIONS_AMOUNT, LEVEL_TYPE_AMOUNT} from "../data/constants";
import {generateRandomInteger} from "./generateRandomInteger";

export default (count) => {
  if (count > QUESTIONS_AMOUNT) {
    return;
  }
  const levelType = generateRandomInteger(0, LEVEL_TYPE_AMOUNT);

};
