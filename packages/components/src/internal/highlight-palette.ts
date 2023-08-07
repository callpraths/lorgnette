import { LitElement, css, html } from 'lit';
import {
  NUM_HIGHLIGHTS,
  highlightClassName,
  highlightColorStyles,
} from '../lib/highlight-color.js';

/**
 * Layout for {@link SearchBox}.
 *
 * This component renders to shadow root, thereby encpasulating the layout for {@link SearchBox}.
 * At the same time, {@link SearchBox} keeps all content in light DOM.
 * @internal
 */
export class HighlightPalette extends LitElement {
  static styles = [
    highlightColorStyles,
    css`
      #container {
        display: flex;
        flex-flow: column nowrap;
        gap: 1rem;
        color: white;
        vertical-align: middle;
      }
      .row {
        display: flex;
        flex-flow: row nowrap;
        gap: 0.5rem;
      }
      .rowcol {
        display: flex;
        flex-flow: column nowrap;
      }
      .content {
        padding: 0.125rem;
        text-align: center;
      }
    `,
  ];

  render() {
    const ordinals = new Array(NUM_HIGHLIGHTS).fill(0).map((_, i) => i);
    return html` <div id="container">
      Some normal text without any highlight.
      ${ordinals.map(
        ordinal => html`
          <div class="row">
            <div class="${highlightClassName(ordinal)} content">
              Highlight ${ordinal}
            </div>
            <div class="${highlightClassName(ordinal, 'soft')} content">
              Soft Highlight ${ordinal}
            </div>
            <div class="rowcol">
              <div class="${highlightClassName(ordinal, 'soft')} content">
                Highlight ${ordinal}
              </div>
              <div class="${highlightClassName(ordinal)} content">
                Highlight ${ordinal}
              </div>
              <div class="${highlightClassName(ordinal, 'soft')} content">
                Highlight ${ordinal}
              </div>
            </div>
          </div>
        `
      )}
    </div>`;
  }
}
