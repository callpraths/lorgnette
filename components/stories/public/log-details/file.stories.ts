import { html } from 'lit';
import '../../../src/define.js';
import { logLine, withBox } from './utils.js';
import { withEventLog } from '../../utils.js';

export default {
  title: 'Public/LogDetails/File',
  component: 'lv-log-file-details',
};

export const Default = () =>
  withBox(html`<lv-log-file-details path="/boo/bap/file.log">
    ${logLine([html`Some Text`])}
  </v-log-file-details`);

export const Events = () =>
  withEventLog(
    withBox(html`<lv-log-file-details path="/boo/bap/file.log">
${logLine([html`Some Text`])}
</v-log-file-details`),
    ['log-line-file-hide', 'log-line-file-details-close']
  );
