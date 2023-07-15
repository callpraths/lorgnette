import { html } from 'lit';
import '../../../src/define.js';
import { withTheme } from '../../utils.js';

export default {
  title: 'Public/LogLine/Timestamp',
  component: 'lv-log-line',
};

export const Default = () =>
  withTheme(html`
    <lv-log-line>
      <lv-log-line-file slot="file" path="a"></lv-log-line-file>
      <lv-log-line-timestamp
        slot="timestamp"
        value="1689086655774"
      ></lv-log-line-timestamp>
      <lv-log-line-text slot="text">
        <lv-log-line-word>Hello</lv-log-line-word>
      </lv-log-line-text>
    </lv-log-line>
  `);

export const None = () =>
  withTheme(html`
    <lv-log-line>
      <lv-log-line-file slot="file" path="a"></lv-log-line-file>
      <lv-log-line-timestamp slot="timestamp"></lv-log-line-timestamp>
      <lv-log-line-text slot="text">
        <lv-log-line-word>Hello</lv-log-line-word>
      </lv-log-line-text>
    </lv-log-line>
  `);

export const Long = () =>
  withTheme(html`
    <lv-log-line>
      <lv-log-line-file slot="file" path="a"></lv-log-line-file>
      <lv-log-line-timestamp
        slot="timestamp"
        value="1689086655774"
        format="long"
      ></lv-log-line-timestamp>
      <lv-log-line-text slot="text">
        <lv-log-line-word>Hello</lv-log-line-word>
      </lv-log-line-text>
    </lv-log-line>
  `);

export const Relative = () =>
  withTheme(html`
    <lv-log-line>
      <lv-log-line-file slot="file" path="a"></lv-log-line-file>
      <lv-log-line-timestamp
        slot="timestamp"
        value="1689086655774"
        origin="1689086655774"
      ></lv-log-line-timestamp>
      <lv-log-line-text slot="text">
        <lv-log-line-word>Hello</lv-log-line-word>
      </lv-log-line-text>
    </lv-log-line>
    <lv-log-line>
      <lv-log-line-file slot="file" path="a"></lv-log-line-file>
      <lv-log-line-timestamp
        slot="timestamp"
        value="1689144218996"
        origin="1689086655774"
      ></lv-log-line-timestamp>
      <lv-log-line-text slot="text">
        <lv-log-line-word>Hello</lv-log-line-word>
      </lv-log-line-text>
    </lv-log-line>
    <lv-log-line>
      <lv-log-line-file slot="file" path="a"></lv-log-line-file>
      <lv-log-line-timestamp
        slot="timestamp"
        value="1688886555774"
        origin="1689086655774"
      ></lv-log-line-timestamp>
      <lv-log-line-text slot="text">
        <lv-log-line-word>Hello</lv-log-line-word>
      </lv-log-line-text>
    </lv-log-line>
  `);
