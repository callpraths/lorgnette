import { LitElement, css, html } from 'lit';
import { property } from 'lit/decorators.js';
import {
  highlightClassName,
  highlightColorStyles,
  noHighlightClassName,
} from '../lib/highlight-color.js';
import { mainBackgroundColor } from '../lib/styles.js';

/**
 * Layout for {@link SearchBox}.
 *
 * This component renders to shadow root, thereby encpasulating the layout for {@link SearchBox}.
 * At the same time, {@link SearchBox} keeps all content in light DOM.
 * @internal
 */
export class SearchBoxLayout extends LitElement {
  static styles = [
    css`
      :host {
        width: 100%;
      }
      #container {
        display: flex;
        flex-flow: column nowrap;
        gap: 0.125rem;
        background-color: ${mainBackgroundColor};
      }
      .hl-prefix {
        width: 1rem;
      }
      #top {
        display: flex;
        flex-flow: row nowrap;
        gap: 1rem;
      }
      ::slotted([slot='search']) {
        flex-grow: 1;
      }
      #bottom {
        display: flex;
        flex-flow: row nowrap;
        gap: 1rem;
      }
      ::slotted([slot='label']) {
        flex-grow: 1;
      }
      #bottom-fill {
        flex-grow: 3;
      }
    `,
    highlightColorStyles,
  ];

  /**
   * Optional highlight index associated with current search.
   */
  @property({ type: Number })
  public highlight: number | undefined;

  render() {
    return html`
      <div id="container">
        <div id="top">
          <div class="${this.highlightClasses}"></div>
          <slot id="search" name="search"></slot>
          <div>
            <slot name="match-case"></slot>
            <slot name="match-whole-word"></slot>
            <slot name="match-regex"></slot>
          </div>
        </div>
        <div id="bottom">
          <div class="${this.highlightClasses}"></div>
          <slot name="label"></slot>
          <div id="bottom-fill"></div>
          <div label="dismiss dialog">
            <slot name="accept"></slot>
            <slot name="reject"></slot>
          </div>
        </div>
      </div>
    `;
  }

  private get highlightClasses(): string {
    const result = 'hl-prefix';
    if (!this.highlight) {
      return `${result} ${noHighlightClassName()}`;
    }
    return `${result} ${highlightClassName(this.highlight)}`;
  }
}
