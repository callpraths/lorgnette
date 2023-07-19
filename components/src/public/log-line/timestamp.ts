/* eslint-disable lit-a11y/click-events-have-key-events */
import { TemplateResult, css, html } from 'lit';
import { property } from 'lit/decorators.js';
import { BaseElement } from '../../lib/base-element.js';
import { parseTimestamp } from '../../lib/time.js';

export type TimestampDisplayFormat = 'short' | 'long';

const parseFormat = (value: string | null): TimestampDisplayFormat => {
  switch (value) {
    case 'long':
      return 'long';
    default:
      return 'short';
  }
};

const MILLS_IN_SECOND = 1000;
const MILLS_IN_MINUTE = MILLS_IN_SECOND * 60;
const MILLS_IN_HOUR = MILLS_IN_MINUTE * 60;
const MILLS_IN_DAY = MILLS_IN_HOUR * 24;

const formatDuration = (duration: number): TemplateResult => {
  const durationAbs = Math.abs(duration);
  const days = Math.floor(durationAbs / MILLS_IN_DAY);
  const hours = Math.floor((durationAbs % MILLS_IN_DAY) / MILLS_IN_HOUR);
  const minutes = Math.floor((durationAbs % MILLS_IN_HOUR) / MILLS_IN_MINUTE);
  const seconds = Math.floor((durationAbs % MILLS_IN_MINUTE) / MILLS_IN_SECOND);
  const milliseconds = durationAbs % MILLS_IN_SECOND;

  const prefix = duration >= 0 ? '+' : '-';
  if (days > 0) {
    return html`${prefix} &gt;1d`;
  }
  return html`${prefix} ${hours}h:${minutes}m:${seconds}.${milliseconds}s`;
};

export type LogLineTimestampClickEventData = unknown;

export type LogLineTimestampEventData = {
  'log-line-timestamp-click': LogLineTimestampClickEventData;
};

/**
 * An element to render timestamp in a log line.
 *
 * @fires log-line-timestamp-click - Fired when the timestamp is clicked.
 */
export class LogLineTimestamp extends BaseElement<LogLineTimestampEventData> {
  static styles = [
    css`
      #container {
        border-right: var(--sl-spacing-3x-small) solid
          var(--sl-color-neutral-600);
        padding-right: 0.5rem;
        overflow: clip;
        text-overflow: ellipsis;
      }
      .selected {
        background-color: var(--sl-color-neutral-900);
        color: var(--sl-color-neutral-50)};
      }
    `,
    // Based on heuristics. The exact width required depends on the font and language.
    css`
      .long {
        width: 24ch;
      }
      .short {
        width: 12ch;
      }
      .relative {
        width: 20ch;
      }
    `,
  ];

  /**
   * The width of the timestamp to display, in characters.
   *
   * Only relevant when showing absolute timestamps.
   *
   * Options:
   * - `short`: Only includes the time component, `HH:MM:SS.MILLIs`. This is usually sufficient because
   *      logs don't span multiple days.
   * - `long`: Full UTC string, e.g. `Mon, 01 Jan 1970 00:00:00 GMT`
   *
   * @default short
   */
  @property({ converter: parseFormat })
  format: TimestampDisplayFormat = 'short';

  /**
   * If set, the origin timestamp to use for calculating the relative timestamp.
   *
   * - Specified as unix timestamp: milliseconds since epoch.
   * - Must be in UTC timezone.
   */
  @property({ converter: parseTimestamp })
  origin: Date | undefined;

  /**
   * The timestamp value to display.
   *
   * - Specified as unix timestamp: milliseconds since epoch.
   * - Must be in UTC timezone.
   */
  @property({ converter: parseTimestamp })
  value: Date | undefined;

  /**
   * Whether the timestamp is selected for details view.
   */
  @property({ type: Boolean })
  selected: boolean = false;

  render() {
    return html`<div
      id="container"
      class="${this.getContainerClasses()}"
      @click=${this.handleClick}
    >
      ${this.renderContent()}
    </div>`;
  }

  private getContainerClasses(): string {
    const classes = [this.getContainerLengthClass()];
    if (this.selected) {
      classes.push('selected');
    }
    return classes.join(' ');
  }

  private getContainerLengthClass(): string {
    if (this.origin !== undefined) {
      return 'relative';
    }
    if (this.format === 'long') {
      return 'long';
    }
    return 'short';
  }

  private renderContent(): TemplateResult {
    if (this.value === undefined) {
      return html``;
    }
    if (this.origin === undefined) {
      return this.formatTimestamp(this.value);
    }
    return formatDuration(this.value.getTime() - this.origin.getTime());
  }

  private formatTimestamp(timestamp: Date): TemplateResult {
    const hourPart = html`${timestamp.getUTCHours()}:${timestamp.getUTCMinutes()}:${timestamp.getUTCSeconds()}.${timestamp.getUTCMilliseconds()}Z`;
    switch (this.format) {
      case 'long':
        return html`${timestamp.getUTCFullYear()}-${timestamp.getUTCMonth()}-${timestamp.getUTCDate()}
        ${hourPart}`;
      default:
        return hourPart;
    }
  }

  private handleClick = () => {
    this.emitCustomEvent('log-line-timestamp-click', undefined);
  };
}
