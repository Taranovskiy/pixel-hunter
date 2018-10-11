import AbstractView from "../abstractView";
import footer from "../footer/footer";

export default class IntroView extends AbstractView {

  get template() {
    return `
        <div id="intro" class="intro">
          <h1 class="intro__asterisk">*</h1>
          <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
        </div> 
        ${footer()}
     `.trim();
  }

  bind() {
    const asteriskButton = this.element.querySelector(`.intro__asterisk`);
    asteriskButton.addEventListener(`click`, () => this.onClick());
  }

  onClick() {
    throw new Error(`Not implemented onClick`);
  }
}


