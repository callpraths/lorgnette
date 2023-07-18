import { TemplateResult, html, nothing } from 'lit';
import '../../../src/define.js';
import { withTheme } from '../../utils.js';

export default {
  title: 'Public/LogDetails/Highlight',
  component: 'lv-log-line',
};

const logLine = (words: TemplateResult[], asAnchor?: boolean) =>
  html`
    <lv-log-line slot=${asAnchor ? 'anchor' : nothing}>
      <lv-log-line-file
        slot="file"
        path="src/public/SearchBox.ts"
      ></lv-log-line-file>
      <lv-log-line-timestamp
        slot="timestamp"
        value="1689086655774"
      ></lv-log-line-timestamp>
      <lv-log-line-text slot="text">
        <lv-log-line-word>${words}</lv-log-line-word>
      </lv-log-line-text>
    </lv-log-line>
  `;

const withBox = (content: TemplateResult, fillCount = 30) =>
  withTheme(html` <style>
      #container {
        width: 50rem;
        height: 30rem;
        overflow-y: scroll;
        position: relative;
      }
    </style>
    <div id="container">
      ${Array.from(Array(fillCount)).map(() => logLine([html`top filler`]))}
      ${content}
      ${Array.from(Array(fillCount)).map(() => logLine([html`bottom filler`]))}
    </div>`);

export const NoDetails = () =>
  withBox(logLine([html`There are no details here!`]));

export const GungHo = () =>
  withBox(html`<sl-popup active flip sync="width">
    ${logLine([html`GungHo`], true)}
    <div style="height: 3rem; background-color: red;"></div>
  </sl-popup>`);
