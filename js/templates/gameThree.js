import createElement from '../utils/createElement';
import greetingElement from "./greeting";
import setActiveScreen from "../utils/setActiveScreen";
import header from "./header";
import stats from "./stats";
import footer from "./footer";
import imageResizer from "../utils/imageResizer";
import checkAnswer from "../utils/checkAnswer";

export default (state, levels) => {
  const levelNum = state.level;
  const level = levels[levelNum - 1];

  const answerContent = level.answerOptions.map((answer, index) => `
    <div class="game__option">
      <img src=${answer.url} alt="Option ${index + 1}">
    </div>
  `).join(``);

  const template = `
  ${header(state)}
  <div class="game">
    <p class="game__task">${level.task}</p>
    <form class="game__content  game__content--triple">
      ${answerContent}
    </form>
    <div class="stats">
      ${stats}
    </div>
  </div>
  ${footer}
`;

  const gameThreeElement = createElement(template);

  const images = [...gameThreeElement.querySelectorAll(`.game__option img`)];
  images.forEach((image) => {
    image.addEventListener(`load`, () => {
      return imageResizer(image);
    });
  });

  const backButton = gameThreeElement.querySelector(`.header__back`);
  backButton.addEventListener(`click`, () => setActiveScreen(greetingElement()));

  const gameOption = gameThreeElement.querySelectorAll(`.game__option`);
  gameOption.forEach((item) => {
    item.addEventListener(`click`, () => setActiveScreen(checkAnswer(state, levels)));
  });

  return gameThreeElement;
};


