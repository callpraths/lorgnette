import { html } from 'lit';
import '../../../src/define.js';
import { logLine, withBox } from './utils.js';

export default {
  title: 'Public/LogDetails/Highlight',
  component: 'lv-log-line',
};

export const NoDetails = () =>
  withBox(logLine([html`There are no details here!`]));
