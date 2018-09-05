export default (element) => {
  const mainScreen = document.querySelector(`main.central`);
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(element);
};
