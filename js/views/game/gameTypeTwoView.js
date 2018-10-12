import AbstractView from "../abstractView";
import header from "../header/header";
import stats from "../stats/stats";
import footer from "../footer/footer";

export default class GameTypeTwoView extends AbstractView {

  constructor(state, levels) {
    super();
    this.state = state;
    this.levels = levels;
  }

  get template() {
    const levelNum = this.state.level;
    const level = this.levels[levelNum - 1];

    const answerContent = level.answerOptions.map((answer, index) => `
    <div class="game__option">
      <img src=${answer.url} alt="Option ${index + 1}"  width="705" height="455">
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

    return `
      ${header(this.state)}
      <div class="game">
        <p class="game__task">${level.task}</p>
        <form class="game__content  game__content--wide">
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

    radioInputs.forEach((item) => {
      item.addEventListener(`change`, (evt) => {
        const answer = evt.currentTarget.value;
        this.onAnswer(answer);
      });
    });
  }

  onClickBackButton() {
    throw new Error(`Not implemented onClickBackButton`);
  }

  onAnswer(answer) {
    return answer;
  }
}
