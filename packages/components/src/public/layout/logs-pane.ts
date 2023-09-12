import { css, html } from 'lit';
import { BaseElement } from '../../lib/base-element';

export class LayoutLogsPane extends BaseElement {
  static styles = css`
    #container {
      width: 100%;
      height: 100%;

      position: relative;
      overflow-y: scroll;
    }

    #container::-webkit-scrollbar {
      width: 0 !important;
    }
    #container {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `;

  render() {
    return html`<div id="container">
      <slot></slot>
    </div>`;
  }
}
