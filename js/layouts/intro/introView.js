import setActiveScreen from '../../utils/setActiveScreen';
import createElement from '../../utils/createElement';
import greetingElement from '../../templates/greeting';
import footer from '../../templates/footer';
import AbstractView from "../../abstractView";

export default class IntroView extends AbstractView {

  get template() {
    return `
      <div id="intro" class="intro">
        <h1 class="intro__asterisk">*</h1>
        <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
      </div> `;
  }

  bind() {
    const asteriskButton = this.element.querySelector(`.intro__asterisk`);
    asteriskButton.addEventListener(`click`, () => this.onClick());
  }

  onClick() {}
}

// export default () => {
//   const template = `
//     <div id="intro" class="intro">
//       <h1 class="intro__asterisk">*</h1>
//       <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
//     </div>
//   </div>
//   ${footer}
// `;
//
//   const introElement = createElement(template);
//
//   const asteriskButton = introElement.querySelector(`.intro__asterisk`);
//   asteriskButton.addEventListener(`click`, () => setActiveScreen(greetingElement()));
//
//   return introElement;
// };


