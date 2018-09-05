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