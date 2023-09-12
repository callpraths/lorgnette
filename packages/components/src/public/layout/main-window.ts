import { css, html } from 'lit';
import { BaseElement } from '../../lib/base-element.js';
import { mainBackgroundColor } from '../../lib/styles.js';

export class LayoutMainWindow extends BaseElement {
  static styles = css`
    #container {
      display: block;
      width: 100%;
      height: 100%;

      background-color: ${mainBackgroundColor};
      color: white;
    }
    ::slotted([slot='logs-pane']) {
      display: block;
      height: 80%;
      padding: var(--sl-spacing-small);
    }
    ::slotted([slot='toolbar-pane']) {
      display: block;
      width: 100%;
      height: 20%;
    }
  `;

  render() {
    return html`<link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.5.2/cdn/themes/dark.css"
      />
      <div id="container">
        <slot name="logs-pane"></slot>
        <slot name="toolbar-pane"></slot>
      </div> `;
  }
}
