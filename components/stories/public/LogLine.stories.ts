import { html } from 'lit';
import '../../src/define.js';
import { withCard } from '../utils.js';

export default {
  title: 'Public/LogLine',
  component: 'lv-log-line',
};

export const Default = () =>
  withCard(html`
    <lv-log-line>
      <lv-log-line-file
        slot="file"
        path="src/public/SearchBox.ts"
      ></lv-log-line-file>
      <lv-log-line-timestamp value="1689086655774"></lv-log-line-timestamp>
      <lv-log-line-text>
        <lv-log-line-word>The</lv-log-line-word>
        <lv-log-line-word>quick</lv-log-line-word>
        <lv-log-line-word>brown</lv-log-line-word>
        <lv-log-line-word>fox</lv-log-line-word>
        <lv-log-line-word>jumps</lv-log-line-word>
        <lv-log-line-word>over</lv-log-line-word>
        <lv-log-line-word>the</lv-log-line-word>
        <lv-log-line-word>lazy</lv-log-line-word>
        <lv-log-line-word>dog</lv-log-line-word>
      </lv-log-line-text>
    </lv-log-line>
    <lv-log-line>
      <lv-log-line-file
        slot="file"
        path="src/public/SearchBox.ts"
      ></lv-log-line-file>
      <lv-log-line-timestamp value="1689086655774"></lv-log-line-timestamp>
      <lv-log-line-text>
        <lv-log-line-word>The</lv-log-line-word>
        <lv-log-line-word>quick</lv-log-line-word>
        <lv-log-line-word>brown</lv-log-line-word>
        <lv-log-line-word>fox</lv-log-line-word>
        <lv-log-line-word>jumps</lv-log-line-word>
        <lv-log-line-word>over</lv-log-line-word>
        <lv-log-line-word>the</lv-log-line-word>
        <lv-log-line-word>lazy</lv-log-line-word>
        <lv-log-line-word>dog</lv-log-line-word>
      </lv-log-line-text>
    </lv-log-line>
    <lv-log-line>
      <lv-log-line-file
        slot="file"
        path="src/public/SearchBox.ts"
      ></lv-log-line-file>
      <lv-log-line-timestamp value="1689086655774"></lv-log-line-timestamp>
      <lv-log-line-text>
        <lv-log-line-word>The</lv-log-line-word>
        <lv-log-line-word>quick</lv-log-line-word>
        <lv-log-line-word>brown</lv-log-line-word>
        <lv-log-line-word>fox</lv-log-line-word>
        <lv-log-line-word>jumps</lv-log-line-word>
        <lv-log-line-word>over</lv-log-line-word>
        <lv-log-line-word>the</lv-log-line-word>
        <lv-log-line-word>lazy</lv-log-line-word>
        <lv-log-line-word>dog</lv-log-line-word>
      </lv-log-line-text>
    </lv-log-line>
  `);
