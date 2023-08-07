import { html } from 'lit';
import '../../../src/define.js';
import { withEventLog, withTheme } from '../../utils.js';

export default {
  title: 'Public/LogLine/Timestamp',
  component: 'lv-log-line',
};

export const None = () =>
  withTheme(html`
    <lv-log-line>
      <lv-log-file slot="file" path="a"></lv-log-file>
      <lv-log-timestamp slot="timestamp"></lv-log-timestamp>
      <lv-log-text slot="text">
        <lv-log-word>Hello</lv-log-word>
      </lv-log-text>
    </lv-log-line>
  `);

export const Long = () =>
  withTheme(html`
    <lv-log-line>
      <lv-log-file slot="file" path="a"></lv-log-file>
      <lv-log-timestamp
        slot="timestamp"
        value="1689086655774"
        format="long"
      ></lv-log-timestamp>
      <lv-log-text slot="text">
        <lv-log-word>Hello</lv-log-word>
      </lv-log-text>
    </lv-log-line>
  `);

export const Relative = () =>
  withTheme(html`
    <lv-log-line>
      <lv-log-file slot="file" path="a"></lv-log-file>
      <lv-log-timestamp
        slot="timestamp"
        value="1689086655774"
        origin="1689086655774"
      ></lv-log-timestamp>
      <lv-log-text slot="text">
        <lv-log-word>Hello</lv-log-word>
      </lv-log-text>
    </lv-log-line>
    <lv-log-line>
      <lv-log-file slot="file" path="a"></lv-log-file>
      <lv-log-timestamp
        slot="timestamp"
        value="1689144218996"
        origin="1689086655774"
      ></lv-log-timestamp>
      <lv-log-text slot="text">
        <lv-log-word>Hello</lv-log-word>
      </lv-log-text>
    </lv-log-line>
    <lv-log-line>
      <lv-log-file slot="file" path="a"></lv-log-file>
      <lv-log-timestamp
        slot="timestamp"
        value="1688886555774"
        origin="1689086655774"
      ></lv-log-timestamp>
      <lv-log-text slot="text">
        <lv-log-word>Hello</lv-log-word>
      </lv-log-text>
    </lv-log-line>
  `);

export const Events = () =>
  withEventLog(
    withTheme(html`
      <lv-log-line>
        <lv-log-file slot="file" path="a"></lv-log-file>
        <lv-log-timestamp
          slot="timestamp"
          value="1689086655774"
        ></lv-log-timestamp>
        <lv-log-text slot="text">
          <lv-log-word>Hello</lv-log-word>
        </lv-log-text>
      </lv-log-line>
    `),
    ['log-timestamp-click']
  );
