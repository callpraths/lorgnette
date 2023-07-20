import { html } from 'lit';
import '../../../src/define.js';
import { logLine, withBox } from './utils.js';

export default {
  title: 'Public/LogDetails/SearchBox',
  component: 'lv-log-line',
};

const selectedLogLine = logLine([html`Anchoring line.`], {
  fileSelected: true,
});

export const Default = () =>
  withBox(html`<lv-log-details-popup>
    ${selectedLogLine}
    <lv-search-box slot="popup-content"></lv-search-box>
  </lv-log-details-popup>`);
