import { html, TemplateResult } from 'lit';
import './event-logger.js';

export interface Story<T = unknown> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

export const withTheme = (inner: TemplateResult): TemplateResult => html`<style>
    .sbx-theme-dark {
      color: white;
      background-color: var(--sl-color-neutral-50);
    }
    .container {
      width: 50rem;
      height: 10rem;
      position: relative;
      overflow-y: scroll;
    }
  </style>
  <div class="sl-theme-dark sbx-theme-dark container">${inner}</div>`;

export const withEventLog = (
  inner: TemplateResult,
  events: string[]
): TemplateResult => html` <sbx-event-logger .events=${events}
  >${inner}</sbx-event-logger
>`;

export const withCard = (inner: TemplateResult): TemplateResult =>
  withTheme(
    html`<sl-card class="card-basic" style="color: white">${inner}</sl-card>`
  );

export const logLine = (
  words: TemplateResult[],
  options?: { expanded?: boolean; highlighted?: boolean }
) =>
  html`
    <lv-log-line ?highlighted=${options?.highlighted ?? false}>
      <lv-log-file slot="file" path="src/public/SearchBox.ts"></lv-log-file>
      <lv-log-timestamp
        slot="timestamp"
        value="1689086655774"
      ></lv-log-timestamp>
      <lv-log-text slot="text" ?expanded=${options?.expanded ?? false}>
        ${words}
      </lv-log-text>
    </lv-log-line>
  `;
