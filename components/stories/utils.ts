import { html, TemplateResult } from 'lit';
import './EventLogger.js';

export interface Story<T = unknown> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

export const withTheme = (inner: TemplateResult): TemplateResult => html` <div
  class="sl-theme-dark"
>
  ${inner}
</div>`;

export const withEventLog = (
  inner: TemplateResult,
  events: string[]
): TemplateResult => html` <sbx-event-logger .events=${events}
  >${inner}</sbx-event-logger
>`;
