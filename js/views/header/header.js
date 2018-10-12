import HeaderView from "./headerView";

export default (state) => {
  const header = new HeaderView(state);
  return header.template;
};

