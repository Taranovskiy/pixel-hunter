export default (state) => {
  const statsItems = state.stats.map((item) => `<li class="stats__result stats__result--${item}"></li>`)
    .join(``);
  return `<ul class="stats">${statsItems}</ul>`;
};

