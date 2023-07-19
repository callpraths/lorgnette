import { css, html } from 'lit';
import { property } from 'lit/decorators.js';
import { BaseElement } from '../../../lib/base-element.js';

export type LogLineFileDetailsHideEventData = unknown;
export type LogLineFileDetailsCloseEventData = unknown;

export type LogLineFileDetailsEventData = {
  'log-line-file-hide': LogLineFileDetailsHideEventData;
  'log-line-file-details-close': LogLineFileDetailsCloseEventData;
};

/**
 * A component that displays file details for a log line.
 *
 * @fires log-line-file-hide - When the user clicks the hide button.
 * @fires log-line-file-details-close - When the user closes the file details.
 */
export class LogLineFileDetails extends BaseElement<LogLineFileDetailsEventData> {
  static styles = css`
    #details-container {
      border: var(--sl-spacing-3x-small) solid var(--sl-color-neutral-300);
      background-color: var(--sl-color-neutral-50);
      padding: var(--sl-spacing-x-small);
    }
    #text {
      display: block;
      padding-left: var(--sl-spacing-medium);
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
    this.emitCustomEvent('log-line-file-hide', undefined);
  };

  private onDismiss = () => {
    this.emitCustomEvent('log-line-file-details-close', undefined);
  };
}
