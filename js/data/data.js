import {QUESTIONS_AMOUNT} from "./constants";

const generateInitialStats = (questionAmount, element) => {
  const stats = [];
  for (let i = 0; i < questionAmount; i++) {
    stats[i] = element;
  }
  return stats;
};

export const initialState = Object.freeze({
  time: 0,
  lives: 3,
  level: 1,
  answerCorrectAmount: 0,
  stats: generateInitialStats(QUESTIONS_AMOUNT, `unknown`)
});

export const paintings = [
  `https://k42.kn3.net/CF42609C8.jpg`,
  `https://k42.kn3.net/D2F0370D6.jpg`,
  `https://k32.kn3.net/5C7060EC5.jpg`,
];

export const photos = [
  `http://i.imgur.com/1KegWPz.jpg`,
  `https://i.imgur.com/DiHM5Zb.jpg`,
  `http://i.imgur.com/DKR1HtB.jpg`,
];

export const levelsTask = {
  levelOne: `Угадайте для каждого изображения фото или рисунок?`,
  levelTwo: `Угадай, фото или рисунок?`,
  levelThree: `Найдите рисунок среди изображений`,
};

