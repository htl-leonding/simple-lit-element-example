import {LitElement, html} from "@polymer/lit-element";

class MyApp extends LitElement {
  handleClick() {
    this.count++;
    console.log("clicked! ->", this.count);
  }

  constructor() {
    super();
    this.count = 2;
  }

  static get properties() {
    return {
      count: {type: Number}
    };
  }

  render() {
    return html`
      <h1>button - event Demo</h1>
      <button @click="${() => this.handleClick()}">ClickMe!</button>
      <h4>Count ${this.count}</h4>
      <hr />
      <h1>input + REST demo</h1>
      <div class="username">
        <label for="uname">Username:</label>
        <input type="text" id="uname" name="uname" required
               minlength="4" maxlength="8"
               placeholder="4 to 8 characters long" />
        <span class="validity"></span>
        <button @click="${() => this.postData(this.shadowRoot.querySelector('#uname').value)}">Save User</button>
    </div>
    `
  }

  postData(name) {
    console.log(name);

    // https://stackoverflow.com/a/51854096/9818338
    const userAction = async() => {
      const response = await fetch('http://localhost:8080/simple/rs/data', {
        method: 'POST',
        body: JSON.stringify({name: name}),
        headers:{
          'Content-Type': 'application/json'
        }
      });
      const myJson = await response.json();
    }
    userAction();


    // h<ttps://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    // fetch('http://localhost:8080/simple/rs/data', {
    //   method: 'POST',
    //   mode: 'cors',
    //   cache: 'no-cache',
    //   credentials: 'same-origin',
    //   body: {name: name},
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   redirect: "follow",
    //   referrer: "no-referrer"
    // })
    //   .then(response => response.json())
    //   .then(res => console.log(JSON.stringify(res)));

  }
}

customElements.define("my-app", MyApp);