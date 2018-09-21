import createElement from '../createElement';
import greetingElement from "./greeting";
import setActiveScreen from "../setActiveScreen";
import header from "./header";
import * as data from "../data";
import stats from "./stats";
import gameThreeElement from './gameThree';
import footer from "./footer";
import imageResizer from "../utils/imageResizer";

const level = data.levels.levelTwo;
const initialState = data.initialState;

export default () => {
  const answerContent = level.answerOptions.map((answer, index) => `
    <div class="game__option">
      <img src=${answer} alt="Option ${index}">
      <label class="game__answer  game__answer--photo">
        <input name="question${index}" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer  game__answer--wide  game__answer--paint">
        <input name="question${index}" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
  `).join(``);

  const template = `
  ${header(initialState)}
  <div class="game">
    <p class="game__task">Угадай, фото или рисунок?</p>
    <form class="game__content  game__content--wide">
      ${answerContent}
    </form>
    <div class="stats">
      ${stats}
    </div>
  </div>
  ${footer}
`;

  const gameTwoElement = createElement(template);

  const images = [...gameTwoElement.querySelectorAll(`.game__option img`)];
  images.forEach((image) => {
    image.addEventListener(`load`, () => {
      return imageResizer(image);
    });
  });

  const backButton = gameTwoElement.querySelector(`.header__back`);
  backButton.addEventListener(`click`, () => setActiveScreen(greetingElement()));

  const radioInputs = gameTwoElement.querySelectorAll(`input[type="radio"]`);
  radioInputs.forEach((item) => {
    item.addEventListener(`change`, () => setActiveScreen(gameThreeElement()));
  });

  return gameTwoElement;
};
