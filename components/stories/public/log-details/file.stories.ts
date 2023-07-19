import { html } from 'lit';
import '../../../src/define.js';
import { logLine, withBox } from './utils.js';
import { withEventLog } from '../../utils.js';

export default {
  title: 'Public/LogDetails/File',
  component: 'lv-log-file-details',
};

const longLogLine = logLine(Array.from(Array(50)).map(() => html`word `));
const longLogLineExpanded = logLine(
  Array.from(Array(100)).map(() => html`word `),
  { expanded: true }
);

export const Default = () =>
  withBox(html`<lv-log-file-details path="/boo/bap/file.log">
    ${logLine([html`Some Text`])}
  </v-log-file-details`);

export const Long = () =>
  withBox(html`
  ${longLogLine}
  <lv-log-file-details path="/boo/bap/file.log">
    ${logLine([html`Some Text`])}
  </v-log-file-details`);

export const Expanded = () =>
  withBox(html`
  ${longLogLineExpanded}
  <lv-log-file-details path="/boo/bap/file.log">
    ${logLine([html`Some Text`])}
  </v-log-file-details`);

export const Events = () =>
  withEventLog(
    withBox(html`<lv-log-file-details path="/boo/bap/file.log">
${logLine([html`Some Text`])}
</v-log-file-details`),
    ['log-line-file-hide', 'log-line-file-details-close']
  );
