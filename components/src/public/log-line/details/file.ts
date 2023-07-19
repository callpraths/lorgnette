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
 */
export class LogLineFileDetails extends BaseElement<LogLineFileDetailsEventData> {
  static styles = css`
    #details-container {
      border: 0.125rem solid var(--sl-color-neutral-300);
      background-color: var(--sl-color-neutral-0);
      padding: 0.5rem;
    }
    #text {
      display: block;
      padding-bottom: 0.5rem;
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
