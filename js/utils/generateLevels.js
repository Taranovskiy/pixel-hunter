import {LEVEL_TYPE_AMOUNT, QUESTIONS_AMOUNT} from "../data/constants";
import generateRandomInteger from "./generateRandomInteger";
import * as data from "../data/data";

const normalLengthArray = (arr, minLength) => {
  const resArr = arr.slice().sort(() => Math.random() - 0.5);
  if (arr.length >= minLength) {
    return resArr;
  }
  return normalLengthArray(arr.concat(resArr).sort(() => Math.random() - 0.5), minLength);
};

const levelsTask = data.levelsTask;
const paintings = {
  urls: normalLengthArray(data.paintings, QUESTIONS_AMOUNT),
  type: `paint`
};
const photos = {
  urls: normalLengthArray(data.photos, QUESTIONS_AMOUNT),
  type: `photo`
};

export default () => {
  let levels = [];

  for (let i = 0; i < QUESTIONS_AMOUNT; i++) {
    const levelType = generateRandomInteger(1, LEVEL_TYPE_AMOUNT);
    let level;
    let answerOptions;
    switch (levelType) {
      case 1:
        answerOptions = [
          {
            url: paintings.urls[i],
            type: paintings.type,
          },
          {
            url: photos.urls[i],
            type: photos.type,
          }
        ];

        level = {
          levelType: 1,
          task: levelsTask.levelOne,
          answerOptions: answerOptions.sort(() => Math.random() - 0.5)
        };

        levels.push(level);
        break;

      case 2:
        let randType = (i % 2 === 0) ? paintings : photos;
        answerOptions = [
          {
            url: randType.urls[i],
            type: randType.type,
          },
        ];

        level = {
          levelType: 2,
          task: levelsTask.levelTwo,
          answerOptions
        };
        levels.push(level);
        break;

      case 3:
        answerOptions = [
          {
            url: paintings.urls[i],
            type: paintings.type,
          },
          {
            url: photos.urls[i],
            type: photos.type,
          },
          {
            url: photos.urls[(i > 0) ? (i - 1) : (i + 1)],
            type: photos.type,
          },
        ];

        level = {
          levelType: 3,
          task: levelsTask.levelThree,
          answerOptions: answerOptions.sort(() => Math.random() - 0.5)
        };

        levels.push(level);
        break;
    }
  }
  return levels;
};
