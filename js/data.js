export const initialState = Object.freeze({
    time: 0,
    lives: 3,
});

export const levels = Object.freeze({
    levelOne: {
      task: `Угадайте для каждого изображения фото или рисунок?`,
      answerOptions: [
        `https://k42.kn3.net/D2F0370D6.jpg`,
        `https://i.imgur.com/DiHM5Zb.jpg`
      ]
    },
    levelTwo: {
      task: `Угадай, фото или рисунок?`,
      answerOptions: [
        `https://k42.kn3.net/CF42609C8.jpg`
      ]
    },
    levelThree: {
      task: `Найдите рисунок среди изображений`,
      answerOptions: [
        `http://i.imgur.com/1KegWPz.jpg`,
        `https://i.imgur.com/DiHM5Zb.jpg`,
        `https://k32.kn3.net/5C7060EC5.jpg`
      ]
    }
});

export const stats = [
  `wrong`,
  `slow`,
  `fast`,
  `correct`,
  `unknown`,
  `unknown`,
  `unknown`,
  `unknown`,
  `unknown`,
  `unknown`,
];

