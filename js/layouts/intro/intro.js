import IntroView from "./introView";
import greetingElement from '../../templates/greeting';

export default () => {
  const intro = new IntroView();
  intro.onClick = () => {
    intro.setActiveView(greetingElement());
  };
};
