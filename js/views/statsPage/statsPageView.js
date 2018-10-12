import AbstractView from "../abstractView";
import header from "../header/header";
import stats from "../stats/stats";
import footer from "../footer/footer";

export default class StatsPageView extends AbstractView {

  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    const correctScores = this.state.score.correct * 100;
    const lives = this.state.lives;
    const livesScores = this.state.lives * 50;
    const fastAnswer = this.state.score.fast;
    const fastScores = this.state.score.fast * 50;
    const slowAnswer = this.state.score.slow;
    const slowScores = -(this.state.score.slow * 50);
    const totalScores = correctScores + livesScores + fastScores + slowScores;

    return `
      ${header(this.state)}
      <div class="result">
        <h1>${(lives > 0) ? `Победа! :)` : `Проигрыш :(`}</h1>
        <table class="result__table">
          <tr>
            <td class="result__number">1.</td>
            <td colspan="2">
              ${stats(this.state)}
            </td>
            <td class="result__points">×&nbsp;100</td>
            <td class="result__total">${correctScores}</td>
          </tr>
          <tr>
            <td></td>
            <td class="result__extra">Бонус за скорость:</td>
            <td class="result__extra">${fastAnswer}&nbsp;<span class="stats__result stats__result--fast"></span></td>
            <td class="result__points">×&nbsp;50</td>
            <td class="result__total">${fastScores}</td>
          </tr>
          <tr>
            <td></td>
            <td class="result__extra">Бонус за жизни:</td>
            <td class="result__extra">${lives}<span class="stats__result stats__result--heart"></span></td>
            <td class="result__points">×&nbsp;50</td>
            <td class="result__total">${livesScores}</td>
          </tr>
          <tr>
            <td></td>
            <td class="result__extra">Штраф за медлительность:</td>
            <td class="result__extra">${slowAnswer}<span class="stats__result stats__result--slow"></span></td>
            <td class="result__points">×&nbsp;50</td>
            <td class="result__total">${slowScores}</td>
          </tr>
          <tr>
            <td colspan="5" class="result__total  result__total--final">${totalScores}</td>
          </tr>
        </table>
        <table class="result__table">
          <tr>
            <td class="result__number">2.</td>
            <td>
              ${stats(this.state)}
            </td>
            <td class="result__total"></td>
            <td class="result__total  result__total--final">fail</td>
          </tr>
        </table>
        <table class="result__table">
          <tr>
            <td class="result__number">3.</td>
            <td colspan="2">
              ${stats(this.state)}
            </td>
            <td class="result__points">×&nbsp;100</td>
            <td class="result__total">900</td>
          </tr>
          <tr>
            <td></td>
            <td class="result__extra">Бонус за жизни:</td>
            <td class="result__extra">2&nbsp;<span class="stats__result stats__result--heart"></span></td>
            <td class="result__points">×&nbsp;50</td>
            <td class="result__total">100</td>
          </tr>
          <tr>
            <td colspan="5" class="result__total  result__total--final">950</td>
          </tr>
        </table>
      </div>
    ${footer()}
  `.trim();
  }

  bind() {
    const backButton = this.element.querySelector(`.header__back`);

    backButton.addEventListener(`click`, () => this.onClickBackButton());
  }

  onClickBackButton() {
    throw new Error(`Not implemented onClickBackButton`);
  }
}
