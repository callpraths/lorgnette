import { TemplateResult, html } from 'lit';
import { withTheme } from '../../utils.js';

export const logLine = (
  words: TemplateResult[],
  options?: {
    expanded?: boolean;
    fileSelected?: boolean;
    timestampSelected?: boolean;
  }
) =>
  html`
    <lv-log-line>
      <lv-log-file
        slot="file"
        path="src/public/SearchBox.ts"
        ?selected=${!!options?.fileSelected}
      ></lv-log-file>
      <lv-log-timestamp
        slot="timestamp"
        value="1689086655774"
        ?selected=${!!options?.timestampSelected}
      ></lv-log-timestamp>
      <lv-log-text ?expanded=${!!options?.expanded} slot="text">
        ${words}
      </lv-log-text>
    </lv-log-line>
  `;

export const withBox = (content: TemplateResult, fillCount = 5) =>
  withTheme(html` <style>
      #container {
        width: 50rem;
        height: 10rem;
        position: relative;
        overflow-y: scroll;
      }
    </style>
    <div id="container">
      ${Array.from(Array(fillCount)).map(() =>
        logLine([html`<lv-log-word>top filler</lv-log-word>`])
      )}
      ${content}
      ${Array.from(Array(fillCount)).map(() =>
        logLine([html`<lv-log-word>bottom filler</lv-log-word>`])
      )}
    </div>`);
