import { css, html } from 'lit';
import { state } from 'lit/decorators.js';
import { BaseElement } from '../lib/BaseElement.js';

/**
 * A line of text in the log.
 *
 * @slot file - The file name. Must be of type {@link LogLineFile}.
 * @slot timestamp - The timestamp. Must be of type {@link LogLineTimestamp}.
 * @slot - The default slot contains the log's text. Must be of type {@link LogLineText}.
 * @fires log-line-text-fold-changed - Fired when the text is expanded or collapsed.
 */
export class LogLine extends BaseElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      gap: 0.25rem;
      background-color: var(--sl-color-neutral-50);
      padding-left: 0.25rem;
      padding-right: 0.25rem;
      padding-top: 0.0625;
      padding-bottom: 0.0625;
    }
    ::slotted(*) {
      display: inline-block;
    }
    ::slotted([slot='file']) {
      flex-shrink: 0;
    }
    ::slotted([slot='timestamp']) {
      flex-shrink: 0;
    }
    ::slotted([slot='text']) {
      flex-grow: 1;
    }
  `;

  @state()
  private overflow: boolean = false;

  @state()
  private expanded: boolean = false;

  render() {
    return html`
      <slot name="file"></slot>
      <slot name="timestamp"></slot>
      <slot name="text"></slot>
    `;
  }
}
