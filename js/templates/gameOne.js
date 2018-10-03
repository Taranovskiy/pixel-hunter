import createElement from '../utils/createElement';
import greetingElement from "./greeting";
import setActiveScreen from "../utils/setActiveScreen";
import header from "./header";
import imageResizer from "../utils/imageResizer";
import stats from "./stats";
import footer from "./footer";
import checkAnswer from "../utils/checkAnswer";
import selectScreen from "../utils/selectScreen";

export default (state, levels, currentLevel) => {
  const levelNum = state.level;
  const level = levels[levelNum - 1];

  const answerContent = level.answerOptions.map((answer, index) => `
    <div class="game__option">
      <img src=${answer.url} alt="Option ${index + 1}">
      <label class="game__answer game__answer--photo">
        <input name="question${index}" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer game__answer--paint">
        <input name="question${index}" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
  `).join(``);

  const template = `
    ${header(state)}
    <div class="game">
      <p class="game__task">${level.task}</p>
      <form class="game__content">
        ${answerContent}
      </form>
      <div class="stats">
        ${stats(state)}
      </div>
    </div>
    ${footer}
  `;

  const gameOneElement = createElement(template);

  const images = [...gameOneElement.querySelectorAll(`.game__option img`)];
  images.forEach((image) => {
    image.addEventListener(`load`, () => {
      return imageResizer(image);
    });
  });

  const backButton = gameOneElement.querySelector(`.header__back`);
  backButton.addEventListener(`click`, () => setActiveScreen(greetingElement()));

  const radioInputs = gameOneElement.querySelectorAll(`input[type="radio"]`);
  let count = 0;
  let selectedRaioInput;
  const answer = [];
  radioInputs.forEach((item) => {
    item.addEventListener(`input`, (evt) => {
      const answerItem = {};
      const targetOption = evt.currentTarget.parentElement.parentElement;
      answerItem.url = targetOption.querySelector(`img`).src;
      answerItem.type = evt.currentTarget.value;
      answer.push(answerItem);

      if (!selectedRaioInput || selectedRaioInput !== evt.target.name) {
        count++;
      }

      selectedRaioInput = evt.target.name;

      if (count === 2) {
        const answerTime = 5;
        const newState = checkAnswer(state, levels, currentLevel, answerTime, answer);
        const nextScreen = selectScreen(newState, levels);
        setActiveScreen(nextScreen);
      }
    });
  });

  return gameOneElement;
};

