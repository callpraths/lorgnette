import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { BaseElement } from '../../lib/BaseElement.js';

/**
 * An element to render a "word" in a log line.
 *
 * @slot - The actual text that comprises this word.
 * @fires - log-line-word-click - Fired when the word is clicked.
 */
export class LogLineWord extends BaseElement {
  @property({ type: Number })
  highlight: number | undefined;

  /**
   * If set, the word is inert and cannot be interacted with.
   */
  @property({ type: Boolean })
  disabled: boolean = false;

  render() {
    return html`<slot></slot> `;
  }
}
