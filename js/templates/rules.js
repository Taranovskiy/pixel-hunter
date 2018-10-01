import setActiveScreen from '../utils/setActiveScreen';
import createElement from '../utils/createElement';
import greetingElement from './greeting';
import header from './header';
import * as data from "../data/data";
import footer from "./footer";
import selectScreen from "../utils/selectScreen";
import generateLevels from "../utils/generateLevels";

const initialState = data.initialState;

export default () => {
  const levels = generateLevels();
  const template = `
    ${header(initialState)}
    <div class="rules">
      <h1 class="rules__title">Правила</h1>
      <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
        src="img/photo_icon.png" width="16" height="16"> или рисунок <img
        src="img/paint_icon.png" width="16" height="16" alt="">.<br>
        Фотографиями или рисунками могут быть оба изображения.<br>
        На каждую попытку отводится 30 секунд.<br>
        Ошибиться можно не более 3 раз.<br>
        <br>
        Готовы?
      </p>
      <form class="rules__form">
        <input class="rules__input" type="text" placeholder="Ваше Имя" autofocus>
        <button class="rules__button  continue" type="submit" disabled>Go!</button>
      </form>
    </div>
    ${footer}
  `;

  const rulesElement = createElement(template);

  const backButton = rulesElement.querySelector(`.header__back`);
  backButton.addEventListener(`click`, () => setActiveScreen(greetingElement()));

  const inputField = rulesElement.querySelector(`.rules__input`);
  const continueButton = rulesElement.querySelector(`button.rules__button`);
  inputField.addEventListener(`input`, () => {
    continueButton.disabled = !inputField.value;
  });

  continueButton.addEventListener(`click`, () => setActiveScreen(selectScreen(initialState, levels)));

  return rulesElement;
};

