import createElement from '../createElement';
import greetingElement from "./greeting";
import setActiveScreen from "../setActiveScreen";
import header from "./header";
import * as data from "../data";
import stats from "./stats";
import gameThreeElement from './gameThree';

export default () => {
  const answerContent = data.levels.levelTwo.answerOptions.map((answer, index) => `
    <div class="game__option">
      <img src=${answer} alt="Option ${index}" width="705" height="455">
      <label class="game__answer  game__answer--photo">
        <input name="question${index}" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer  game__answer--wide  game__answer--paint">
        <input name="question${index}" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
  `).join('');

  const template = `
  ${header(data.initialState)}
  <div class="game">
    <p class="game__task">Угадай, фото или рисунок?</p>
    <form class="game__content  game__content--wide">
      ${answerContent}
    </form>
    <div class="stats">
      ${stats}
    </div>
  </div>
  <footer class="footer">
    <a href="https://htmlacademy.ru" class="social-link social-link--academy">HTML Academy</a>
    <span class="footer__made-in">Сделано в <a href="https://htmlacademy.ru" class="footer__link">HTML Academy</a> &copy; 2016</span>
    <div class="footer__social-links">
      <a href="https://twitter.com/htmlacademy_ru" class="social-link  social-link--tw">Твиттер</a>
      <a href="https://www.instagram.com/htmlacademy/" class="social-link  social-link--ins">Инстаграм</a>
      <a href="https://www.facebook.com/htmlacademy" class="social-link  social-link--fb">Фэйсбук</a>
      <a href="https://vk.com/htmlacademy" class="social-link  social-link--vk">Вконтакте</a>
    </div>
  </footer>
`;

  const gameTwoElement = createElement(template);

  const backButton = gameTwoElement.querySelector(`.header__back`);
  backButton.addEventListener(`click`, () => setActiveScreen(greetingElement()));

  const radioInputs = gameTwoElement.querySelectorAll(`input[type="radio"]`);
  radioInputs.forEach((item) => {
    item.addEventListener(`change`, () => setActiveScreen(gameThreeElement()));
  });

  return gameTwoElement;
};
