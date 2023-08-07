import { html } from 'lit';
import '../../../src/define.js';
import { withEventLog, withTheme } from '../../utils.js';

export default {
  title: 'Public/LogLine/File',
  component: 'lv-log-line',
};

export const NoFile = () =>
  withTheme(html`
    <lv-log-line>
      <lv-log-file slot="file"></lv-log-file>
      <lv-log-timestamp
        slot="timestamp"
        value="1689086655774"
      ></lv-log-timestamp>
      <lv-log-text slot="text">
        <lv-log-word>Hello</lv-log-word>
      </lv-log-text>
    </lv-log-line>
  `);

export const WindowsPath = () =>
  withTheme(html`
    <lv-log-line>
      <lv-log-file
        slot="file"
        path="C:\\src\\public\\SearchBox.ts"
      ></lv-log-file>
      <lv-log-timestamp
        slot="timestamp"
        value="1689086655774"
      ></lv-log-timestamp>
      <lv-log-text slot="text">
        <lv-log-word>Hello</lv-log-word>
      </lv-log-text>
    </lv-log-line>
  `);

export const BasePath = () =>
  withTheme(html`
    <lv-log-line>
      <lv-log-file slot="file" path="SearchBox.ts"></lv-log-file>
      <lv-log-timestamp
        slot="timestamp"
        value="1689086655774"
      ></lv-log-timestamp>
      <lv-log-text slot="text">
        <lv-log-word>Hello</lv-log-word>
      </lv-log-text>
    </lv-log-line>
  `);

export const Fit = () =>
  withTheme(html`
    <lv-log-line>
      <lv-log-file slot="file" path="MMMMMMMM" displayWidth="8"></lv-log-file>
      <lv-log-timestamp
        slot="timestamp"
        value="1689086655774"
      ></lv-log-timestamp>
      <lv-log-text slot="text">
        <lv-log-word>How many "M"s can displayWidth 8 fit?</lv-log-word>
      </lv-log-text>
    </lv-log-line>
    <lv-log-line>
      <lv-log-file slot="file" path="mmmmmmmm" displayWidth="8"></lv-log-file>
      <lv-log-timestamp
        slot="timestamp"
        value="1689086655774"
      ></lv-log-timestamp>
      <lv-log-text slot="text">
        <lv-log-word>How many "m"s?</lv-log-word>
      </lv-log-text>
    </lv-log-line>
    <lv-log-line>
      <lv-log-file slot="file" path="iiiiiiii" displayWidth="8"></lv-log-file>
      <lv-log-timestamp
        slot="timestamp"
        value="1689086655774"
      ></lv-log-timestamp>
      <lv-log-text slot="text">
        <lv-log-word>And so many "i"s!</lv-log-word>
      </lv-log-text>
    </lv-log-line>
  `);

export const Events = () =>
  withEventLog(
    withTheme(html`
      <lv-log-line>
        <lv-log-file slot="file" path="src/public/SearchBox.ts"></lv-log-file>
        <lv-log-timestamp
          slot="timestamp"
          value="1689086655774"
        ></lv-log-timestamp>
        <lv-log-text slot="text">
          <lv-log-word>Hello</lv-log-word>
        </lv-log-text>
      </lv-log-line>
    `),
    ['log-file-click']
  );
