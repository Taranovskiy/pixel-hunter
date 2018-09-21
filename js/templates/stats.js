import {stats as statsData} from '../data/data';

const statsItems = statsData.map((item) => `<li class="stats__result stats__result--${item}"></li>`)
  .join(``);

export default `<ul class="stats">${statsItems}</ul>`;
