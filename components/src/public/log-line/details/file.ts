import { html } from 'lit';
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
 * @slot default - The log line to anchor popup to.
 * @fires log-file-hide - When the user clicks the hide button.
 * @fires log-file-details-close - When the user closes the file details.
 */
export class LogFileDetails extends BaseElement<LogFileDetailsEventData> {
  /**
   * The path of the file.
   */
  @property()
  path: string = '';

  render() {
    return html`
      <lvi-details-popup>
        <slot></slot>
        <div slot="popup-content">
          <lvi-common-details>
            <div slot="text">Full path: ${this.path}</div>
            <sl-button variant="text" @click=${this.onHide} slot="button"
              >h</sl-button
            >
            <sl-button variant="text" @click=${this.onDismiss} slot="close"
              >🗙</sl-button
            >
          </lvi-common-details>
        </div>
      </lvi-details-popup>
    `;
  }

  private onHide = () => {
    this.emitCustomEvent('log-file-hide', undefined);
  };

  private onDismiss = () => {
    this.emitCustomEvent('log-file-details-close', undefined);
  };
}
