import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { BaseElement } from '../../lib/BaseElement.js';

/**
 * An element to render timestamp in a log line.
 *
 * @fires log-line-timestamp-click - Fired when the timestamp is clicked.
 */
export class LogLineTimestamp extends BaseElement {
  @property({ type: Number })
  width: number = 10;

  @property({ type: Date })
  origin: Date | undefined;

  @property({ type: Date })
  value: Date | undefined;

  render() {
    return html` <span id="timestamp"><slot></slot></span> `;
  }
}
