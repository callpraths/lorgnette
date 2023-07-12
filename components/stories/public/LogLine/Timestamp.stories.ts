import { html } from 'lit';
import '../../../src/define.js';
import { withCard } from '../../utils.js';

export default {
  title: 'Public/LogLine/Timestamp',
  component: 'lv-log-line',
};

export const Default = () =>
  withCard(html`
    <lv-log-line>
      <lv-log-line-file slot="file" path="a"></lv-log-line-file>
      <lv-log-line-timestamp value="1689086655774"></lv-log-line-timestamp>
      <lv-log-line-text>
        <lv-log-line-word>Hello</lv-log-line-word>
      </lv-log-line-text>
    </lv-log-line>
  `);

export const None = () =>
  withCard(html`
    <lv-log-line>
      <lv-log-line-file slot="file" path="a"></lv-log-line-file>
      <lv-log-line-timestamp></lv-log-line-timestamp>
      <lv-log-line-text>
        <lv-log-line-word>Hello</lv-log-line-word>
      </lv-log-line-text>
    </lv-log-line>
  `);

export const Long = () =>
  withCard(html`
    <lv-log-line>
      <lv-log-line-file slot="file" path="a"></lv-log-line-file>
      <lv-log-line-timestamp
        value="1689086655774"
        format="long"
      ></lv-log-line-timestamp>
      <lv-log-line-text>
        <lv-log-line-word>Hello</lv-log-line-word>
      </lv-log-line-text>
    </lv-log-line>
  `);

export const Relative = () =>
  withCard(html`
    <lv-log-line>
      <lv-log-line-file slot="file" path="a"></lv-log-line-file>
      <lv-log-line-timestamp
        value="1689086655774"
        origin="1689086655774"
      ></lv-log-line-timestamp>
      <lv-log-line-text>
        <lv-log-line-word>Hello</lv-log-line-word>
      </lv-log-line-text>
    </lv-log-line>
    <lv-log-line>
      <lv-log-line-file slot="file" path="a"></lv-log-line-file>
      <lv-log-line-timestamp
        value="1689144218996"
        origin="1689086655774"
      ></lv-log-line-timestamp>
      <lv-log-line-text>
        <lv-log-line-word>Hello</lv-log-line-word>
      </lv-log-line-text>
    </lv-log-line>
    <lv-log-line>
      <lv-log-line-file slot="file" path="a"></lv-log-line-file>
      <lv-log-line-timestamp
        value="1688886555774"
        origin="1689086655774"
      ></lv-log-line-timestamp>
      <lv-log-line-text>
        <lv-log-line-word>Hello</lv-log-line-word>
      </lv-log-line-text>
    </lv-log-line>
  `);
