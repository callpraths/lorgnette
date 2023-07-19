/* eslint-disable lit-a11y/click-events-have-key-events */
import { TemplateResult, css, html } from 'lit';
import { property } from 'lit/decorators.js';
import { BaseElement } from '../../lib/base-element.js';

const baseName = (path: string) => path.split(/[\\/]/).pop() ?? '';

export type LogLineFileClickEventData = unknown;

export type LogLineFileEventData = {
  'log-line-file-click': LogLineFileClickEventData;
};

/**
 * An element to render file name in a log line.
 *
 * @slot - The file name.
 * @fires log-line-file-click - Fired when the file name is clicked.
 */
export class LogLineFile extends BaseElement<LogLineFileEventData> {
  static styles = css`
    :host {
      border-right: var(--sl-spacing-3x-small) solid var(--sl-color-neutral-600);
      padding-right: 0.25rem;
      overflow: clip;
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
   * Whether the file name is selected for details view.
   */
  @property({ type: Boolean })
  selected: boolean = false;

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
      <div @click=${this.handleClick}>${this.fileName()}</div>
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

  private dynamicStyle(): TemplateResult[] {
    const dynamicStyle: TemplateResult[] = [];
    // 1rem fits an M, but that takes up too much space for most other characters, so we use 0.75rem.
    // This is just a heuristic and may not work for all fonts or languages.
    dynamicStyle.push(html` :host { width: ${this.displayWidth * 0.75}rem; } `);
    if (this.selected) {
      dynamicStyle.push(
        html`
          :host { background-color: var(--sl-color-neutral-900); color:
          var(--sl-color-neutral-50)};
        `
      );
    }
    return dynamicStyle;
  }

  private handleClick = () => {
    this.emitCustomEvent('log-line-file-click', undefined);
  };
}
