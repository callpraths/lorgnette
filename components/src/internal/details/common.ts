import { css, html } from 'lit';
import { property } from 'lit/decorators.js';
import { BaseElement } from '../../lib/base-element.js';

/**
 * Internal component to layout common log line details.
 *
 * @slot text - The text to display. Shown on the top line.
 * @slot button - One or more buttons to display. Shown on left side of bottom line.
 * @slot close - The close button. Shown on right side of bottom line.
 */
export class CommonDetails extends BaseElement {
  static styles = css`
    ::slotted([slot='text']) {
      display: block;
      padding-left: var(--sl-spacing-medium);
      padding-bottom: var(--sl-spacing-small);
    }
    #button-bar {
      display: flex;
      flex-flow: row nowrap;
    }
    #filler {
      flex-grow: 1;
    }
  `;

  /**
   * The path of the file.
   */
  @property()
  path: string = '';

  render() {
    return html`
      <slot name="text"></slot>
      <div id="button-bar">
        <slot name="button"></slot>
        <div id="filler"></div>
        <slot name="close"></slot>
      </div>
    `;
  }
}
