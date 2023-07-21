import { css, html } from 'lit';
import { property } from 'lit/decorators.js';
import { BaseElement } from '../../../lib/base-element.js';
import {
  mainBackgroundColor,
  selectedTextBackgroundColor,
} from '../../../lib/styles.js';

/**
 * Component to house popup details for a log line.
 *
 * Ensures consistent contents and layout across log line details.
 *
 * @slot default - The log line to anchor popup to.
 * @slot popup-content - The container for the details.
 */
export class LogDetailsPopup extends BaseElement {
  static styles = css`
    ::slotted([slot='popup-content']) {
      /** Deal with flex containers **/
      display: block;
      border: var(--sl-spacing-3x-small) solid ${selectedTextBackgroundColor};
      background-color: ${mainBackgroundColor};
      padding: var(--sl-spacing-3x-small);
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
