export default class abstractModel {
  get urlRead() {
    throw new Error(`Abstract method. Define the URL for model`);
  }

  get urlWrite() {
    throw new Error(`Abstract method. Define the URL for model`);
  }

  load(url = this.urlRead) {
    return fetch(url)
      .then((resp) => resp.json());
  }

  send(data) {
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`,
    };

    return fetch(this.urlWrite, requestSettings);
  }
}
