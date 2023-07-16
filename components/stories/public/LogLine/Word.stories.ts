import { html } from 'lit';
import '../../../src/define.js';
import { withTheme } from '../../utils.js';

export default {
  title: 'Public/LogLine/Word',
  component: 'lv-log-line',
};

export const Highlight = () =>
  withTheme(html`
    <lv-log-line>
      <lv-log-line-file
        slot="file"
        path="src/public/SearchBox.ts"
      ></lv-log-line-file>
      <lv-log-line-timestamp
        slot="timestamp"
        value="1689086655774"
      ></lv-log-line-timestamp>
      <lv-log-line-text slot="text">
        <lv-log-line-word>No highlight</lv-log-line-word>
        <lv-log-line-word highlight="4">Highlight</lv-log-line-word>
        <lv-log-line-word highlight="2">Another highlight</lv-log-line-word>
        <lv-log-line-word highlight="6"></lv-log-line-word>
        <lv-log-line-word>Before this was an empty highlight</lv-log-line-word>
        <lv-log-line-word highlight="4005"
          >Really large number, module highlight</lv-log-line-word
        >
      </lv-log-line-text>
    </lv-log-line>
  `);
