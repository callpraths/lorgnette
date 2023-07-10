import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export type LineFoldHighlight = number | 'multiple' | 'none';

const fromHighlightAttribute = (value?: string | null): LineFoldHighlight => {
  if (value === undefined || value === null || value === 'none') {
    return 'none';
  }
  if (value === 'multiple') {
    return 'multiple';
  }
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) {
    return 'none';
  }
  return parsed;
};

/**
 * An icon to indicate whether a line is folded or not.
 *
 * Used by <lv-line-fold-button>.
 *
 * @internal
 */
export class LineFold extends LitElement {
  static styles = css`
    #main {
      width: 1rem;
      height: 1rem;
      background: red linear-gradient(red, blue);
      clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
    }
  `;

  /**
   * If true, the line is folded.
   */
  @property({ type: Boolean })
  folded: boolean = false;

  /**
   * Highlights hidden behind the fold.
   *
   * Only effective when `folded` is true.
   *
   * Must be one of the following:
   * - `none`: No highlights are hidden.
   * - `multiple`: Multiple highlights are hidden.
   * - A number: The ordinal of the highlight that is hidden, when only one or
   *       more instances of the same highlight are hidden.
   */
  @property({ converter: fromHighlightAttribute })
  highlight: LineFoldHighlight = 'none';

  render() {
    return html`<div id="main"></div>`;
  }
}
