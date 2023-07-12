import { TemplateResult, css, html } from 'lit';
import { property } from 'lit/decorators.js';
import { BaseElement } from '../../lib/BaseElement.js';

const parseTimestamp = (value: string | null): Date | undefined => {
  if (value === null) {
    return undefined;
  }
  const timestamp = Number(value);
  if (Number.isNaN(timestamp)) {
    return undefined;
  }
  return new Date(timestamp);
};

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

  const prefix = duration > 0 ? '+ ' : '- ';
  if (days > 0) {
    return html`&gt; ${prefix}1d`;
  }
  return html`${prefix}${hours}h:${minutes}m:${seconds}.${milliseconds}s`;
};

/**
 * An element to render timestamp in a log line.
 *
 * @fires log-line-timestamp-click - Fired when the timestamp is clicked.
 */
export class LogLineTimestamp extends BaseElement {
  static styles = css`
    :host {
      border-right: 0.125rem solid var(--sl-color-gray-500);
      padding-right: 0.5rem;
    }
  `;

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

  render() {
    if (this.value === undefined) {
      return html``;
    }
    if (this.origin === undefined) {
      return this.formatTimestamp(this.value);
    }
    return formatDuration(this.value.getTime() - this.origin.getTime());
  }

  private formatTimestamp(timestamp: Date): TemplateResult {
    switch (this.format) {
      case 'long':
        return html`${timestamp.toUTCString()}`;
      default:
        return html`${timestamp.getUTCHours()}:${timestamp.getUTCMinutes()}:${timestamp.getUTCSeconds()}.${timestamp.getUTCMilliseconds()}`;
    }
  }
}
