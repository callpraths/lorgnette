/* eslint-disable lit-a11y/click-events-have-key-events */
import { css, html } from 'lit';
import { property } from 'lit/decorators.js';
import { BaseElement } from '../../lib/base-element.js';
import {
  highlightClassName,
  highlightColorStyles,
} from '../../lib/highlight-color.js';
import {
  selectedTextBackgroundColor,
  selectedTextColor,
} from '../../lib/styles.js';

export type LogLineWordClickEventData = unknown;

export type LogLineWordEventData = {
  'log-line-word-click': LogLineWordClickEventData;
};

/**
 * An element to render a "word" in a log line.
 *
 * @slot - The actual text that comprises this word.
 * @fires - log-line-word-click - Fired when the word is clicked.
 */
export class LogLineWord extends BaseElement<LogLineWordEventData> {
  static styles = [
    css`
      :host {
        overflow: clip;
        text-overflow: ellipsis;
        overflow-wrap: break-word;
      }
      .selected {
        background-color: ${selectedTextBackgroundColor};
        color: ${selectedTextColor}};
      }
    `,
    highlightColorStyles,
  ];

  /**
   * The highlight color of this word, if any.
   */
  @property({ type: Number })
  highlight: number | undefined;

  /**
   * Whether this word is selected.
   */
  @property({ type: Boolean })
  selected: boolean = false;

  /**
   * If set, the word is inert and cannot be interacted with.
   */
  @property({ type: Boolean })
  disabled: boolean = false;

  render() {
    return html`<span class="${this.highlightClass}" @click=${this.wordClick}
      ><slot></slot
    ></span>`;
  }

  private get highlightClass() {
    if (this.selected) {
      return 'selected';
    }
    if (this.highlight === undefined) {
      return '';
    }
    return highlightClassName(this.highlight, 'soft');
  }

  private wordClick = () => {
    if (this.disabled) {
      return;
    }
    this.emitCustomEvent('log-line-word-click', undefined);
  };
}
