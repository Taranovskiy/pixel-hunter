import setActiveScreen from '../setActiveScreen';
import createElement from '../createElement';
import greetingElement from './greeting';
import footer from './footer'

export default () => {
  const template = `
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>
  ${footer}
`;

  const introElement = createElement(template);

  const asteriskButton = introElement.querySelector(`.intro__asterisk`);
  asteriskButton.addEventListener(`click`, () => setActiveScreen(greetingElement()));

  return introElement;
};


