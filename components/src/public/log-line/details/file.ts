import { css, html } from 'lit';
import { property } from 'lit/decorators.js';
import { BaseElement } from '../../../lib/base-element.js';

export type LogFileDetailsHideEventData = unknown;
export type LogFileDetailsCloseEventData = unknown;

export type LogFileDetailsEventData = {
  'log-file-hide': LogFileDetailsHideEventData;
  'log-file-details-close': LogFileDetailsCloseEventData;
};

/**
 * A component that displays file details for a log line.
 *
 * @fires log-file-hide - When the user clicks the hide button.
 * @fires log-file-details-close - When the user closes the file details.
 */
export class LogFileDetails extends BaseElement<LogFileDetailsEventData> {
  static styles = css`
    #details-container {
      border: var(--sl-spacing-3x-small) solid var(--sl-color-neutral-900);
      background-color: var(--sl-color-neutral-50);
      padding: var(--sl-spacing-x-small);
    }
    #text {
      display: block;
      padding-left: var(--sl-spacing-medium);
      padding-bottom: var(--sl-spacing-small);
    }
    #button-bar {
      display: flex;
      flex-flow: row nowrap;
    }
    #filler {
      flex-grow: 1;
    }
  `;

  /**
   * The path of the file.
   */
  @property()
  path: string = '';

  render() {
    return html` <sl-popup active flip sync="width">
      <div id="log-line" slot="anchor">
        <slot></slot>
      </div>
      <div id="details-container">
        <div id="text">Full path: ${this.path}</div>
        <div id="button-bar">
          <sl-button variant="text" @click=${this.onHide}>h</sl-button>
          <div id="filler"></div>
          <sl-button variant="text" @click=${this.onDismiss}>🗙</sl-button>
        </div>
      </div>
    </sl-popup>`;
  }

  private onHide = () => {
    this.emitCustomEvent('log-file-hide', undefined);
  };

  private onDismiss = () => {
    this.emitCustomEvent('log-file-details-close', undefined);
  };
}
