import { css, html } from 'lit';
import { property } from 'lit/decorators.js';
import { BaseElement } from '../../lib/base-element.js';

/**
 * Internal component to house popup details for a log line.
 *
 * @slot default - The log line to anchor popup to.
 * @slot popup-content - The container for the details.
 */
export class DetailsPopup extends BaseElement {
  static styles = css`
    ::slotted([slot='popup-content']) {
      border: var(--sl-spacing-3x-small) solid var(--sl-color-neutral-900);
      background-color: var(--sl-color-neutral-50);
      padding: var(--sl-spacing-x-small);
    }
  `;

  /**
   * The path of the file.
   */
  @property()
  path: string = '';

  render() {
    return html` <sl-popup active flip sync="width">
      <div slot="anchor">
        <slot></slot>
      </div>
      <slot name="popup-content"> </slot>
    </sl-popup>`;
  }
}
