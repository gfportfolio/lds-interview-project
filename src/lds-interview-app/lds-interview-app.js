class LdsInterviewApp extends Polymer.Element {
  static get is() {
    return 'lds-interview-app';
  }
  static get properties() {
    return {
      page: {
        type: String,
        value: 'title'
      }
    };
  }

}

window.customElements.define(LdsInterviewApp.is, LdsInterviewApp);