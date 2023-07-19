import { css, html } from 'lit';
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
 * @fires log-timestamp-pin - When the timestamp is pinned or unpinned as relative time origin.
 * @fires log-timestamp-details-close - When the user closes the timestamp details.
 */
export class LogTimestampDetails extends BaseElement<LogTimestampDetailsEventData> {
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
    return html` <sl-popup active flip sync="width">
      <div id="log-line" slot="anchor">
        <slot></slot>
      </div>
      <div id="details-container">
        <div id="text">
          Timestamp: ${this.value?.toUTCString() ?? 'unknown'}
        </div>
        <div id="button-bar">
          <lvi-toggle-button
            id="pin"
            ?checked=${this.pinned}
            @click=${this.onPinUpdated}
            >p</lvi-toggle-button
          >
          <div id="filler"></div>
          <sl-button variant="text" @click=${this.onDismiss}>🗙</sl-button>
        </div>
      </div>
    </sl-popup>`;
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
