import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { BaseElement } from '../../lib/BaseElement.js';

/**
 * An element to render timestamp in a log line.
 *
 * @fires log-line-timestamp-click - Fired when the timestamp is clicked.
 */
export class LogLineTimestamp extends BaseElement {
  /**
   * The width of the timestamp to display, in characters.
   */
  @property({ type: Number })
  displayWidth: number = 10;

  /**
   * If set, the origin timestamp to use for calculating the relative timestamp.
   */
  @property({ type: Date })
  origin: Date | undefined;

  /**
   * The timestamp value to display.
   */
  @property({ type: Date })
  value: Date | undefined;

  render() {
    return html` <span id="timestamp">${this.value}</span> `;
  }
}
