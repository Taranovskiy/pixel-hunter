import createElement from '../utils/createElement';
import greetingElement from "./greeting";
import setActiveScreen from "../utils/setActiveScreen";
import header from "./header";
import stats from "./stats";
import footer from "./footer";
import imageResizer from "../utils/imageResizer";
import checkAnswer from "../utils/checkAnswer";
import selectScreen from "../utils/selectScreen";


export default (state, levels, currentLevel) => {
  const levelNum = state.level;
  const level = levels[levelNum - 1];

  const answerContent = level.answerOptions.map((answer, index) => `
    <div class="game__option">
      <img src=${answer.url} alt="Option ${index + 1}">
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
  ${header(state)}
  <div class="game">
    <p class="game__task">${level.task}</p>
    <form class="game__content  game__content--wide">
      ${answerContent}
    </form>
    <div class="stats">
      ${stats(state)}
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
    item.addEventListener(`change`, (evt) => {
      const answerTime = 25;
      const answer = evt.currentTarget.value;
      const newState = checkAnswer(state, levels, currentLevel, answerTime, answer);
      const nextScreen = selectScreen(newState, levels);
      setActiveScreen(nextScreen);
    });
  });

  return gameTwoElement;
};
