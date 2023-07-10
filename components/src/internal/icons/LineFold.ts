import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

/**
 * An icon to indicate whether a line is folded or not.
 * @internal
 */
export class LineFold extends LitElement {
  static styles = css`
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
    .no-highlights {
      background: var(--sl-color-neutral-950);
    }
    .with-highlights {
      background: var(--sl-color-yellow-500)
        linear-gradient(
          var(--sl-color-red-500),
          var(--sl-color-yellow-500),
          var(--sl-color-emerald-500),
          var(--sl-color-blue-500)
        );
    }
  `;

  /**
   * If true, the line fold is expanded.
   */
  @property({ type: Boolean })
  expanded: boolean = false;

  /**
   * If true, the line contains highlights hidden in the fold.
   *
   * Only effective when `expanded` is false.
   */
  @property({ type: Boolean })
  highlighted: boolean = false;

  render() {
    return html`<div class="${this.getClasses()}"></div>`;
  }

  private getClasses() {
    const classes = [];
    if (this.expanded) {
      classes.push('unfolded');
    } else {
      classes.push('folded');
    }
    if (!this.expanded && this.highlighted) {
      classes.push('with-highlights');
    } else {
      classes.push('no-highlights');
    }
    return classes.join(' ');
  }
}
