import { css, html, LitElement } from 'lit';

export class SearchBox extends LitElement {
  static styles = css`
    :host {
      width: 100%;
    }
    #card {
      width: 100%;
      --padding: 0.125rem;
    }
    #container {
      display: flex;
      flex-flow: column nowrap;
      gap: 0.125rem;
    }
    #top {
      display: flex;
      flex-flow: row nowrap;
      gap: 1rem;
    }
    #search {
      flex-grow: 1;
    }
    #bottom {
      display: flex;
      flex-flow: row nowrap;
      gap: 1rem;
    }
    #label {
      flex-grow: 1;
    }
    #bottom-fill {
      flex-grow: 3;
    }
  `;

  render() {
    return html`
      <sl-card id="card" class="card-basic">
        <div id="container">
          <div id="top">
            <sl-input id="search"></sl-input>
            <div>
              <sl-button variant="text">Aa</sl-button>
              <sl-button variant="text"><u>az</u></sl-button>
              <sl-button variant="text">.*</sl-button>
            </div>
          </div>
          <div id="bottom">
            <sl-input id="label"></sl-input>
            <div id="bottom-fill"></div>
            <div label="dismiss dialog">
              <sl-button variant="text">✓</sl-button>
              <sl-button variant="text">🗙</sl-button>
            </div>
          </div>
        </div>
      </sl-card>
    `;
  }
}
