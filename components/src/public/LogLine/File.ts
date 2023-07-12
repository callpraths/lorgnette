import { TemplateResult, css, html } from 'lit';
import { property } from 'lit/decorators.js';
import { BaseElement } from '../../lib/BaseElement.js';

const baseName = (path: string) => path.split(/[\\/]/).pop() ?? '';

/**
 * An element to render file name in a log line.
 *
 * @slot - The file name.
 * @fires log-line-file-click - Fired when the file name is clicked.
 */
export class LogLineFile extends BaseElement {
  static styles = css`
    :host {
      border-right: 0.125rem solid var(--sl-color-gray-500);
      padding-right: 0.25rem;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `;

  /**
   * The width of the file name to display, in characters.
   *
   * This is only a hint as the exact number of characters displayed depends on the font.
   */
  @property({ type: Number })
  displayWidth: number = 10;

  /**
   * The path of the file.
   */
  @property()
  path: string = '';

  render() {
    return html`
      <style>
        ${this.dynamicStyle()}
      </style>
      ${this.fileName()}
    `;
  }

  private fileName(): TemplateResult {
    const path = (this.path ?? '').trim();
    const name = baseName(path);

    if (name.length === 0) {
      return html``;
    }
    return html`${name}`;
  }

  private dynamicStyle(): TemplateResult {
    // 1rem fits an M, but that takes up too much space for most other characters, so we use 0.75rem.
    // This is just a heuristic and may not work for all fonts or languages.
    return html` :host { width: ${this.displayWidth * 0.75}rem; } `;
  }
}
