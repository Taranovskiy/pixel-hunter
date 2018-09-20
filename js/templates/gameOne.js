import createElement from '../createElement';
import greetingElement from "./greeting";
import setActiveScreen from "../setActiveScreen";
import header from "./header";
import * as data from "../data";
import stats from "./stats";
import gameTwoElement from './gameTwo';
import footer from "./footer";

const level = data.levels.levelOne;
const initialState = data.initialState;

export default () => {
  const answerContent = level.answerOptions.map((answer, index) => `
    <div class="game__option">
      <img src=${answer} alt="Option ${index + 1}" width="468" height="458">
      <label class="game__answer game__answer--photo">
        <input name="question${index}" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer game__answer--paint">
        <input name="question${index + 1}" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
  `).join(``);

  const template = `
    ${header(initialState)}
    <div class="game">
      <p class="game__task">${level.task}</p>
      <form class="game__content">
        ${answerContent}
      </form>
      <div class="stats">
        ${stats}
      </div>
    </div>
    ${footer}
  `;

  const gameOneElement = createElement(template);

  const backButton = gameOneElement.querySelector(`.header__back`);
  backButton.addEventListener(`click`, () => setActiveScreen(greetingElement()));

  const radioInputs = gameOneElement.querySelectorAll(`input[type="radio"]`);
  let count = 0;
  radioInputs.forEach((item) => {
    item.addEventListener(`change`, () => {
      count++;
      if (count === 2) {
        setActiveScreen(gameTwoElement());
      }
    });
  });

  return gameOneElement;
};

