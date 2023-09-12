import { html } from 'lit';
import '../../../src/define.js';
import { logLine, withBox } from './utils.js';
import { withEventLog } from '../../utils.js';

export default {
  title: 'Public/LogDetails/File',
  component: 'lv-log-file-details',
};

const longLogLine = logLine(
  Array.from(Array(50)).map(() => html`<lv-log-word>word</lv-log-word>`)
);
const longLogLineExpanded = logLine(
  Array.from(Array(100)).map(() => html`<lv-log-word>word</lv-log-word>`),
  { expanded: true }
);
const selectedLogLine = logLine(
  [html`<lv-log-word>Anchoring line.</lv-log-word>`],
  {
    fileSelected: true,
  }
);

export const Default = () =>
  withBox(html`<lv-log-file-details path="/boo/bap/file.log">
    ${selectedLogLine}
  </lv-log-file-details>`);

export const Long = () =>
  withBox(html` ${longLogLine}
    <lv-log-file-details path="/boo/bap/file.log">
      ${selectedLogLine}
    </lv-log-file-details>`);

export const Expanded = () =>
  withBox(html` ${longLogLineExpanded}
    <lv-log-file-details path="/boo/bap/file.log">
      ${selectedLogLine}
    </lv-log-file-details>`);

export const Events = () =>
  withEventLog(
    withBox(html`<lv-log-file-details path="/boo/bap/file.log">
      ${selectedLogLine}
    </lv-log-file-details>`),
    ['log-file-hide', 'log-file-details-close']
  );
