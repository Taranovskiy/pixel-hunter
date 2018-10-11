import createElement from '../utils/createElement';
import greetingElement from "../views/greeting/greetingView";
import header from "../views/header/header";
import stats from "../views/stats/stats";
import setActiveScreen from "../utils/setActiveScreen";
import footer from "../views/footer/footerViews";

export default (state) => {
  const correctScores = state.score.correct * 100;
  const lives = state.lives;
  const livesScores = state.lives * 50;
  const fastAnswer = state.score.fast;
  const fastScores = state.score.fast * 50;
  const slowAnswer = state.score.slow;
  const slowScores = -(state.score.slow * 50);
  const totalScores = correctScores + livesScores + fastScores + slowScores;


  const template = `
    ${header(state)}
    <div class="result">
      <h1>${(lives > 0) ? `Победа! :)` : `Проигрыш :(`}</h1>
      <table class="result__table">
        <tr>
          <td class="result__number">1.</td>
          <td colspan="2">
            ${stats(state)}
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
            ${stats(state)}
          </td>
          <td class="result__total"></td>
          <td class="result__total  result__total--final">fail</td>
        </tr>
      </table>
      <table class="result__table">
        <tr>
          <td class="result__number">3.</td>
          <td colspan="2">
            ${stats(state)}
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
    ${footer}
  `;

  const statsElement = createElement(template);

  const backButton = statsElement.querySelector(`.header__back`);
  backButton.addEventListener(`click`, () => setActiveScreen(greetingElement()));

  return statsElement;
};

