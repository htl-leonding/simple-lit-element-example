import {LitElement, html} from "@polymer/lit-element";

class Dropdown extends LitElement {

  handleClick() {
    let selectItem = this.shadowRoot.getElementById('dropdownmenu');
    console.log('item => ', selectItem);
    let currentOptValue = selectItem.value;
    console.log('selected value => ', currentOptValue);
    let currentOptText = selectItem.options[selectItem.selectedIndex].text;
    console.log("selected text => ", currentOptText);
    let currentOptIndex = selectItem.selectedIndex;
    console.log('index of selected option => ', currentOptIndex);
    this.choosenEntry = currentOptValue;
  }

  handleOnChange(e) {
    console.log('onChange activated (Man braucht den Button eigentlich nicht)');
    console.log('onChange wurde im folgenden Element ausgelöst: ', e.target.id);
  }

  constructor() {
    super();
    this.choosenEntry = "nichts ausgewählt";
  }

  static get properties() {
    return {
      choosenEntry: {type: String}
    };
  }

  // https://www.quackit.com/javascript/javascript_dropdown_menu.cfm
  render() {
    return html`
      <br /><br />
      <hr />
      <h1>Dropdown Demo</h1>
      <form name="dropdownform">
      <select id="dropdownmenu" @change="${(e) => this.handleOnChange(e)}">
        <option>Choose ...</option>
        <option value='JavaVALUE' >JavaTEXT</option>
        <option value='JavaScriptVALUE' >JavaScriptTEXT</option>
        <option value='HTMLVALUE' >HTMLTEXT</option>
        <option value='CSSVALUE' >CSSTEXT</option>
        <option value='SQLVALUE' >SQLTEXT</option>
        <option value='Database TutorialVALUE' >Database TutorialTEXT</option>
        <option value='Web Hosting TutorialVALUE' >Web Hosting TutorialTEXT</option>
      </select>
      </form>
      <button @click="${() => this.handleClick()}">Choose entry</button>
      <!--<button @click="${() => this.handleClick(this.shadowRoot.querySelector('#dropdownmenu').value)}">Choose entry</button>-->
      <p>Es wurde ausgewählt: <span name="choosenentry">${this.choosenEntry}</span></p>
    `
  }

}

customElements.define("my-dropdown", Dropdown);