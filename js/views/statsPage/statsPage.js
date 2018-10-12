import StatsPageView from "./statsPageView";
import AbstractView from "../abstractView";
import greetingElement from "../greeting/greeting";

export default (state) => {
  const statsPage = new StatsPageView(state);

  statsPage.onClickBackButton = () => {
    AbstractView.setActiveView(greetingElement());
  };

  return statsPage.element;
};
