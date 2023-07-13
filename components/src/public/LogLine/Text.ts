import { css, html } from 'lit';
import { property } from 'lit/decorators.js';
import { BaseElement } from '../../lib/BaseElement.js';

/**
 * An element to render the text of a log line.
 *
 * @slot - The words that comprise the text. Must be of type {@link LogLineWord}.
 */
export class LogLineText extends BaseElement {
  static styles = css`
    :host {
      overflow: clip;
    }
    .folded {
      white-space: nowrap;
    }
    .unfolded {
      overflow-wrap: anywhere;
      word-break: break-all;
    }
  `;

  /**
   * Whether the text is expanded or not.
   *
   * NB: This attribute is managed by the containing {@link LogLine} element.
   */
  @property({ type: Boolean })
  expanded: boolean = false;

  render() {
    return html`<div class="${this.expanded ? 'unfolded' : 'folded'}">
      <slot></slot>
    </div>`;
  }
}
