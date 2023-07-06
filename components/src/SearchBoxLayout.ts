import { LitElement, css, html } from 'lit';

/**
 * Layout for {@link SearchBox}.
 *
 * This component renders to shadow root, thereby encpasulating the layout for {@link SearchBox}.
 * At the same time, {@link SearchBox} keeps all content in light DOM.
 * @internal
 */
export class SearchBoxLayout extends LitElement {
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
    ::slotted([slot='search']) {
      flex-grow: 1;
    }
    #bottom {
      display: flex;
      flex-flow: row nowrap;
      gap: 1rem;
    }
    ::slotted([slot='label']) {
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
            <slot id="search" name="search"></slot>
            <div>
              <slot name="match-case"></slot>
              <slot name="match-whole-word"></slot>
              <slot name="match-regex"></slot>
            </div>
          </div>
          <div id="bottom">
            <slot name="label"></slot>
            <div id="bottom-fill"></div>
            <div label="dismiss dialog">
              <slot name="accept"></slot>
              <slot name="reject"></slot>
            </div>
          </div>
        </div>
      </sl-card>
    `;
  }
}
