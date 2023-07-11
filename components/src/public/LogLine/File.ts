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
  /**
   * The width of the file name to display, in characters.
   */
  @property({ type: Number })
  displayWidth: number = 10;

  /**
   * The path of the file.
   */
  @property()
  path: string = '';

  render() {
    return html` <span id="file">${this.path}</span> `;
  }
}
