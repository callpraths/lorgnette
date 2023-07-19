import { html } from 'lit';
import '../../../src/define.js';
import { logLine, withBox } from './utils.js';
import { withEventLog } from '../../utils.js';

export default {
  title: 'Public/LogDetails/Timestamp',
  component: 'lv-log-timestamp-details',
};

const longLogLine = logLine(Array.from(Array(50)).map(() => html`word `));
const longLogLineExpanded = logLine(
  Array.from(Array(100)).map(() => html`word `),
  { expanded: true }
);
const selectedLogLine = logLine([html`Anchoring line.`], {
  timestampSelected: true,
});

export const Default = () =>
  withBox(html`
<lv-log-timestamp-details value="1689086655774">
${selectedLogLine}
</v-log-timestamp-details>`);

export const Pinned = () =>
  withBox(html`
<lv-log-timestamp-details value="1689086655774" pinned>
${selectedLogLine}
</v-log-timestamp-details>`);

export const Long = () =>
  withBox(html`
  ${longLogLine}
  <lv-log-timestamp-details value="1689086655774">
  ${selectedLogLine}
  </v-log-timestamp-details>`);

export const Expanded = () =>
  withBox(html`
  ${longLogLineExpanded}
  <lv-log-timestamp-details value="1689086655774">
  ${selectedLogLine}
  </v-log-timestamp-details>`);

export const Events = () =>
  withEventLog(
    withBox(html`
    <lv-log-timestamp-details value="1689086655774">
    ${selectedLogLine}
    </v-log-timestamp-details>`),
    ['log-line-timestamp-pin', 'log-line-timestamp-details-close']
  );
