import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import {
  highlightClassName,
  highlightColorStyles,
} from '../../lib/highlightColor.js';

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
  static styles = [
    css`
      .folded {
        width: 1rem;
        height: 1rem;
        clip-path: polygon(
          100% 50%,
          100% 0%,
          30% 50%,
          100% 100%,
          100% 50%,
          90% 50%,
          90% 90%,
          40% 50%,
          90% 10%,
          90% 50%
        );
      }
      .unfolded {
        width: 1rem;
        height: 1rem;
        clip-path: polygon(0% 0%, 100% 0%, 50% 70%);
      }
      .highlights-none {
        background: var(--sl-color-neutral-950);
      }
      .highlights-multiple {
        background: var(--sl-color-yellow-500)
          linear-gradient(
            var(--sl-color-red-500),
            var(--sl-color-yellow-500),
            var(--sl-color-emerald-500),
            var(--sl-color-blue-500)
          );
      }
    `,
    highlightColorStyles,
  ];

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
    return html`<div class="${this.getClasses()}"></div>`;
  }

  private getClasses() {
    const classes = [];
    if (this.folded) {
      classes.push('folded');
    } else {
      classes.push('unfolded');
    }
    switch (this.highlight) {
      case 'none':
        classes.push('highlights-none');
        break;
      case 'multiple':
        classes.push('highlights-multiple');
        break;
      default:
        classes.push(highlightClassName(this.highlight, 'soft'));
    }
    return classes.join(' ');
  }
}
