export default (string) => {
  const container = document.createElement(`template`);
  container.innerHTML = string;
  return container.content;
};
