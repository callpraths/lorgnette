import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { BaseElement } from '../../lib/BaseElement.js';

/**
 * An element to render file name in a log line.
 *
 * @slot - The file name.
 * @fires log-line-file-click - Fired when the file name is clicked.
 */
export class LogLineFile extends BaseElement {
  @property({ type: Number })
  width: number = 10;

  render() {
    return html` <span id="file"><slot></slot></span> `;
  }
}
