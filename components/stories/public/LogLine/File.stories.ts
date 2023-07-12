import { html } from 'lit';
import '../../../src/define.js';
import { withTheme } from '../../utils.js';

export default {
  title: 'Public/LogLine/File',
  component: 'lv-log-line',
};

export const Default = () =>
  withTheme(html`
    <lv-log-line>
      <lv-log-line-file
        slot="file"
        path="src/public/SearchBox.ts"
      ></lv-log-line-file>
      <lv-log-line-timestamp value="1689086655774"></lv-log-line-timestamp>
      <lv-log-line-text>
        <lv-log-line-word>Hello</lv-log-line-word>
      </lv-log-line-text>
    </lv-log-line>
  `);

export const NoFile = () =>
  withTheme(html`
    <lv-log-line>
      <lv-log-line-file slot="file"></lv-log-line-file>
      <lv-log-line-timestamp value="1689086655774"></lv-log-line-timestamp>
      <lv-log-line-text>
        <lv-log-line-word>Hello</lv-log-line-word>
      </lv-log-line-text>
    </lv-log-line>
  `);

export const WindowsPath = () =>
  withTheme(html`
    <lv-log-line>
      <lv-log-line-file
        slot="file"
        path="C:\\src\\public\\SearchBox.ts"
      ></lv-log-line-file>
      <lv-log-line-timestamp value="1689086655774"></lv-log-line-timestamp>
      <lv-log-line-text>
        <lv-log-line-word>Hello</lv-log-line-word>
      </lv-log-line-text>
    </lv-log-line>
  `);

export const BasePath = () =>
  withTheme(html`
    <lv-log-line>
      <lv-log-line-file slot="file" path="SearchBox.ts"></lv-log-line-file>
      <lv-log-line-timestamp value="1689086655774"></lv-log-line-timestamp>
      <lv-log-line-text>
        <lv-log-line-word>Hello</lv-log-line-word>
      </lv-log-line-text>
    </lv-log-line>
  `);

export const Fit = () =>
  withTheme(html`
    <lv-log-line>
      <lv-log-line-file
        slot="file"
        path="MMMMMMMM"
        displayWidth="8"
      ></lv-log-line-file>
      <lv-log-line-timestamp value="1689086655774"></lv-log-line-timestamp>
      <lv-log-line-text>
        <lv-log-line-word
          >How many "M"s can displayWidth 8 fit?</lv-log-line-word
        >
      </lv-log-line-text>
    </lv-log-line>
    <lv-log-line>
      <lv-log-line-file
        slot="file"
        path="mmmmmmmm"
        displayWidth="8"
      ></lv-log-line-file>
      <lv-log-line-timestamp value="1689086655774"></lv-log-line-timestamp>
      <lv-log-line-text>
        <lv-log-line-word>How many "m"s?</lv-log-line-word>
      </lv-log-line-text>
    </lv-log-line>
    <lv-log-line>
      <lv-log-line-file
        slot="file"
        path="iiiiiiii"
        displayWidth="8"
      ></lv-log-line-file>
      <lv-log-line-timestamp value="1689086655774"></lv-log-line-timestamp>
      <lv-log-line-text>
        <lv-log-line-word>And so many "i"s!</lv-log-line-word>
      </lv-log-line-text>
    </lv-log-line>
  `);
