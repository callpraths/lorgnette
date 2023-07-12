import { css, html } from 'lit';
import { BaseElement } from '../lib/BaseElement.js';

/**
 * A line of text in the log.
 *
 * @slot file - The file name. Must be of type {@link LogLineFile}.
 * @slot timestamp - The timestamp. Must be of type {@link LogLineTimestamp}.
 * @slot - The default slot contains the log's text. Must be of type {@link LogLineText}.
 * @fires log-line-text-expanded - Fired when the text is expanded.
 * @fires log-line-text-folded - Fired when the text is folded.
 */
export class LogLine extends BaseElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      gap: 0.25rem;
    }
    ::slotted(*) {
      display: inline-block;
    }
  `;

  render() {
    return html`
      <slot name="file"></slot>
      <slot name="timestamp"></slot>
      <!-- default slot: text -->
      <slot></slot>
      <!-- add line fold button here -->
    `;
  }
}
