export default class abstractModel {
  get urlRead() {
    throw new Error(`Abstract method. Define the URL for model`);
  }

  get urlWrite() {
    throw new Error(`Abstract method. Define the URL for model`);
  }

  load() {
    return fetch(this.urlRead)
      .then((resp) => resp.json());
  }

  send() {

  }
}
