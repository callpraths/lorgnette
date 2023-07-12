import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { BaseElement } from '../../lib/BaseElement.js';

/**
 * An element to render the text of a log line.
 *
 * @slot - The words that comprise the text. Must be of type {@link LogLineWord}.
 */
export class LogLineText extends BaseElement {
  @property({ type: Boolean })
  expanded: boolean = false;

  render() {
    return html`<slot></slot>`;
  }
}
