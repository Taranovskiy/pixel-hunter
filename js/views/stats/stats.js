import StatsView from "./statsView";

export default (state) => {
  const stats = new StatsView(state);
  return stats.template;
};
