import { html } from 'lit';
import '../../src/define.js';
import { withTheme } from '../utils.js';

export default {
  title: 'Public/LogLine',
  component: 'lv-log-line',
};

export const Default = () =>
  withTheme(html`
    <lv-log-line>
      <lv-log-file slot="file" path="src/public/SearchBox.ts"></lv-log-file>
      <lv-log-timestamp
        slot="timestamp"
        value="1689086655774"
      ></lv-log-timestamp>
      <lv-log-text slot="text">
        <lv-log-word>The</lv-log-word>
        <lv-log-word>quick</lv-log-word>
        <lv-log-word>brown</lv-log-word>
        <lv-log-word>fox</lv-log-word>
        <lv-log-word>jumps</lv-log-word>
        <lv-log-word>over</lv-log-word>
        <lv-log-word>the</lv-log-word>
        <lv-log-word>lazy</lv-log-word>
        <lv-log-word>dog</lv-log-word>
      </lv-log-text>
    </lv-log-line>
    <lv-log-line>
      <lv-log-file slot="file" path="src/public/SearchBox.ts"></lv-log-file>
      <lv-log-timestamp
        slot="timestamp"
        value="1689086655774"
      ></lv-log-timestamp>
      <lv-log-text slot="text">
        <lv-log-word>The</lv-log-word>
        <lv-log-word>quick</lv-log-word>
        <lv-log-word>brown</lv-log-word>
        <lv-log-word>fox</lv-log-word>
        <lv-log-word>jumps</lv-log-word>
        <lv-log-word>over</lv-log-word>
        <lv-log-word>the</lv-log-word>
        <lv-log-word>lazy</lv-log-word>
        <lv-log-word>dog</lv-log-word>
      </lv-log-text>
    </lv-log-line>
    <lv-log-line>
      <lv-log-file slot="file" path="src/public/SearchBox.ts"></lv-log-file>
      <lv-log-timestamp
        slot="timestamp"
        value="1689086655774"
      ></lv-log-timestamp>
      <lv-log-text slot="text">
        <lv-log-word>The</lv-log-word>
        <lv-log-word>quick</lv-log-word>
        <lv-log-word>brown</lv-log-word>
        <lv-log-word>fox</lv-log-word>
        <lv-log-word>jumps</lv-log-word>
        <lv-log-word>over</lv-log-word>
        <lv-log-word>the</lv-log-word>
        <lv-log-word>lazy</lv-log-word>
        <lv-log-word>dog</lv-log-word>
      </lv-log-text>
    </lv-log-line>
  `);
