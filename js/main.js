import createElement from './createElement';

console.log(createElement(`
  <main class="central">
    <div id="main" class="central__content">
      <div id="intro" class="intro">
        <h1 class="intro__asterisk">*</h1>
        <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
      </div>
    </div>
    <footer class="footer">
      <a href="https://htmlacademy.ru" class="social-link social-link--academy">HTML Academy</a>
      <span class="footer__made-in">Сделано в <a href="https://htmlacademy.ru" class="footer__link">HTML Academy</a> &copy; 2016</span>
      <div class="footer__social-links">
        <a href="https://twitter.com/htmlacademy_ru" class="social-link  social-link--tw">Твиттер</a>
        <a href="https://www.instagram.com/htmlacademy/" class="social-link  social-link--ins">Инстаграм</a>
        <a href="https://www.facebook.com/htmlacademy" class="social-link  social-link--fb">Фэйсбук</a>
        <a href="https://vk.com/htmlacademy" class="social-link  social-link--vk">Вконтакте</a>
      </div>
    </footer>
  </main>
`));

const screens = document.querySelectorAll(`template`);
const mainScreen = document.querySelector(`main.central`);

let currentScreenIndex = 0;

const setActiveScreen = (number) => {
  const screenContent = screens[number].content.cloneNode(true);
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(screenContent);
};


const nextScreen = () => {
  if (currentScreenIndex < (screens.length - 1)) {
    setActiveScreen(++currentScreenIndex);
  }
};

const prevScreen = () => {
  if (currentScreenIndex > 0) {
    setActiveScreen(--currentScreenIndex);
  }
};

document.addEventListener(`keydown`, (event) => {
  if (event.altKey) {
    switch (event.keyCode) {
      case 39:
        nextScreen();
        break;
      case 37:
        prevScreen();
        break;
    }
  }
});

setActiveScreen(currentScreenIndex);
