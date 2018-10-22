import header from '../header/header';
import * as data from "../../data/data";
import footer from "../footer/footer";
import AbstractView from "../../abstractView";

const initialState = data.initialState;

export default class RulesView extends AbstractView {

  get template() {
    return `
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
          <button class="rules__button  continue" type="button" disabled>Go!</button>
        </form>
      </div>
      ${footer()}
    `.trim();
  }

  bind() {
    const backButton = this.element.querySelector(`.header__back`);
    const inputField = this.element.querySelector(`.rules__input`);
    const continueButton = this.element.querySelector(`button.rules__button`);

    backButton.addEventListener(`click`, () => this.onClickBackButton());

    inputField.addEventListener(`input`, () => RulesView.enableButton(inputField, continueButton));

    continueButton.addEventListener(`click`, () => this.onClickContinueButton());
  }

  onClickBackButton() {
    throw new Error(`Not implemented onClickBackButton`);
  }

  static enableButton(inputField, continueButton) {
    continueButton.disabled = !inputField.value;
  }

  onClickContinueButton() {
    throw new Error(`Not implemented onClickContinueButton`);
  }
}
