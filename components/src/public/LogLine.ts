import { html } from 'lit';
import { BaseElement } from '../lib/BaseElement.js';

/**
 * A line of text in the log.
 *
 * @fires log-line-text-expanded - Fired when the text is expanded.
 * @fires log-line-text-folded - Fired when the text is folded.
 */
export class LogLine extends BaseElement {
  render() {
    return html`
      <slot name="file"></slot>
      <slot name="timestamp"></slot>
      <span id="text"><slot name="text"></slot></span>
      <!-- add line fold button here -->
    `;
  }
}
