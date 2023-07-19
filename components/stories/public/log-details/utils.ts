import { TemplateResult, html } from 'lit';
import { withTheme } from '../../utils.js';

export const logLine = (
  words: TemplateResult[],
  options?: {
    expanded?: boolean;
    fileSelected?: boolean;
  }
) =>
  html`
    <lv-log-line>
      <lv-log-line-file
        slot="file"
        path="src/public/SearchBox.ts"
        ?selected=${!!options?.fileSelected}
      ></lv-log-line-file>
      <lv-log-line-timestamp
        slot="timestamp"
        value="1689086655774"
      ></lv-log-line-timestamp>
      <lv-log-line-text ?expanded=${!!options?.expanded} slot="text">
        <lv-log-line-word>${words}</lv-log-line-word>
      </lv-log-line-text>
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
      ${Array.from(Array(fillCount)).map(() => logLine([html`top filler`]))}
      ${content}
      ${Array.from(Array(fillCount)).map(() => logLine([html`bottom filler`]))}
    </div>`);
