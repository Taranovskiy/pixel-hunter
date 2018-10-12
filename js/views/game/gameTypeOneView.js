import AbstractView from "../abstractView";
import header from "../header/header";
import stats from "../stats/stats";
import footer from "../footer/footer";

export default class GameTypeOneView extends AbstractView {

  constructor(state, levels, currentLevel) {
    super();
    this.state = state;
    this.levels = levels;
    // this.currentLevel = currentLevel;
  }

  get template() {
    const levelNum = this.state.level;
    const level = this.levels[levelNum - 1];
    const answerContent = level.answerOptions.map((answer, index) => `
    <div class="game__option">
      <img src=${answer.url} alt="Option ${index + 1}" width="468" height="458">
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

    return `
      ${header(this.state)}
      <div class="game">
        <p class="game__task">${level.task}</p>
        <form class="game__content">
          ${answerContent}
        </form>
        <div class="stats">
          ${stats(this.state)}
        </div>
      </div>
      ${footer()}
  `.trim();
  }

  bind() {
    const backButton = this.element.querySelector(`.header__back`);
    const radioInputs = this.element.querySelectorAll(`input[type="radio"]`);

    backButton.addEventListener(`click`, () => this.onClickBackButton());

    let count = 0;
    let selectedRadioInput;
    const answer = [];
    radioInputs.forEach((item) => {
      item.addEventListener(`input`, (evt) => {
        const answerItem = {};
        const targetOption = evt.currentTarget.parentElement.parentElement;
        answerItem.url = targetOption.querySelector(`img`).src;
        answerItem.type = evt.currentTarget.value;
        answer.push(answerItem);

        if (!selectedRadioInput || selectedRadioInput !== evt.target.name) {
          count++;
        }

        selectedRadioInput = evt.target.name;

        if (count === 2) {
          this.onAnswer(answer);
        }
      });
    });
  }

  onClickBackButton() {
    throw new Error(`Not implemented onClickBackButton`);
  }

  onAnswer() {
    throw new Error(`Not implemented onAnswer`);
  }
}
