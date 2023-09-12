import { TemplateResult, html } from 'lit';
import '../../../src/define.js';
import { longWord, manyWords, rawLongText } from '../../constants.js';
import { logLine } from '../../utils.js';

export default {
  title: 'Public/Layout/MainWindow',
  component: 'lv-layout-main-window',
};

const withBox = (inner: TemplateResult) =>
  html`<div style="width: 80vw; height: 80vh; background: green">
    ${inner}
  </div>`;

const batchOfLines = () => [
  logLine([html`<lv-log-word>top filler</lv-log-word>`]),
  logLine([manyWords], { highlighted: true }),
  logLine([longWord]),
  logLine([rawLongText]),
  logLine([]),
  logLine([rawLongText, manyWords, rawLongText]),
];

export const Default = () =>
  withBox(html`<lv-layout-main-window>
    <lv-layout-logs-pane slot="logs-pane">
      ${Array.from(Array(4)).map(() => batchOfLines())}
      <lv-log-file-details path="/boo/bap/file.log">
        ${logLine([html`ANCHOR`])}
      </lv-log-file-details>
      ${Array.from(Array(2)).map(() => batchOfLines())}
      <lv-log-timestamp-details value="1689086655774">
        ${logLine([html`ANCHOR`])}
      </lv-log-timestamp-details>
      ${Array.from(Array(4)).map(() => batchOfLines())}
      <lv-log-details-popup>
        ${logLine([html`ANCHOR`])}
        <lv-search-box highlight="5" slot="popup-content"></lv-search-box>
      </lv-log-details-popup>
      ${Array.from(Array(14)).map(() => batchOfLines())}
    </lv-layout-logs-pane>
    <div style="background-color: gray;" slot="toolbar-pane"></div>
  </lv-layout-main-window>`);
