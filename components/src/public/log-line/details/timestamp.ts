import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { BaseElement } from '../../../lib/base-element.js';
import { parseTimestamp } from '../../../lib/time.js';
import { ToggleButton } from '../../../internal/index.js';

export type LogFileDetailsPinEventData = {
  pinned: boolean;
};
export type LogTimestampDetailsCloseEventData = unknown;

export type LogTimestampDetailsEventData = {
  'log-timestamp-pin': LogFileDetailsPinEventData;
  'log-timestamp-details-close': LogTimestampDetailsCloseEventData;
};

/**
 * A component that displays file details for a log line.
 *
 * @slot default - The log line to anchor popup to.
 * @fires log-timestamp-pin - When the timestamp is pinned or unpinned as relative time origin.
 * @fires log-timestamp-details-close - When the user closes the timestamp details.
 */
export class LogTimestampDetails extends BaseElement<LogTimestampDetailsEventData> {
  /**
   * The timestamp value to display.
   *
   * - Specified as unix timestamp: milliseconds since epoch.
   * - Must be in UTC timezone.
   */
  @property({ converter: parseTimestamp })
  value: Date | undefined;

  /**
   * Initial value for whether the timestamp is pinned as the relative time origin.
   *
   * This value is not updated when the user clicks the pin button.
   * Subscribe to the `log-timestamp-pin` event to get updates.
   */
  @property({ type: Boolean })
  pinned: boolean = false;

  render() {
    return html` <lv-log-details-popup>
      <slot></slot>
      <div slot="popup-content">
        <lvi-common-details>
          <div slot="text">
            Timestamp: ${this.value?.toUTCString() ?? 'unknown'}
          </div>
          <lvi-toggle-button
            id="pin"
            ?checked=${this.pinned}
            @click=${this.onPinUpdated}
            slot="button"
            >p</lvi-toggle-button
          >
          <sl-button variant="text" @click=${this.onDismiss} slot="close"
            >🗙</sl-button
          >
        </lvi-common-details>
      </div>
    </lv-log-details-popup>`;
  }

  private onPinUpdated = () => {
    const pin = this.shadowRoot?.getElementById('pin') as
      | ToggleButton
      | undefined;
    this.emitCustomEvent('log-timestamp-pin', {
      pinned: !!pin?.value,
    });
  };

  private onDismiss = () => {
    this.emitCustomEvent('log-timestamp-details-close', undefined);
  };
}
