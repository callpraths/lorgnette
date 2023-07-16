import { css, html } from 'lit';
import { property } from 'lit/decorators.js';
import { BaseElement } from '../../lib/BaseElement.js';
import {
  highlightClassName,
  highlightColorStyles,
} from '../../lib/highlightColor.js';

/**
 * An element to render a "word" in a log line.
 *
 * @slot - The actual text that comprises this word.
 * @fires - log-line-word-click - Fired when the word is clicked.
 */
export class LogLineWord extends BaseElement {
  static styles = [
    css`
      :host {
        overflow: clip;
        text-overflow: ellipsis;
        overflow-wrap: break-word;
      }
    `,
    highlightColorStyles,
  ];

  @property({ type: Number })
  highlight: number | undefined;

  /**
   * If set, the word is inert and cannot be interacted with.
   */
  @property({ type: Boolean })
  disabled: boolean = false;

  render() {
    return html`<span class="${this.highlightClass}"><slot></slot></span>`;
  }

  private get highlightClass() {
    if (this.highlight === undefined) {
      return '';
    }
    return highlightClassName(this.highlight, 'soft');
  }
}
