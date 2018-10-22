import AbstractView from "../../abstractView";
import header from "../header/header";
import stats from "../stats/stats";
import footer from "../footer/footer";

export default class GameTypeThreeView extends AbstractView {

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
      <img src=${answer.url} alt="Option ${index + 1}" width="304" height="455">
    </div>
  `).join(``);

    return `
      ${header(this.state)}
      <div class="game">
        <p class="game__task">${level.task}</p>
        <form class="game__content  game__content--triple">
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
    const gameOption = this.element.querySelectorAll(`.game__option`);

    backButton.addEventListener(`click`, () => this.onClickBackButton());

    gameOption.forEach((item) => {
      item.addEventListener(`click`, (evt) => {
        const answer = evt.currentTarget.querySelector(`img`);
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
