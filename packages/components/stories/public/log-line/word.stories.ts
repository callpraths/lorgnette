import { html } from 'lit';
import '../../../src/define.js';
import { withEventLog, withTheme } from '../../utils.js';

export default {
  title: 'Public/LogLine/Word',
  component: 'lv-log-line',
};

export const Highlight = () =>
  withTheme(html`
    <lv-log-line>
      <lv-log-file slot="file" path="src/public/SearchBox.ts"></lv-log-file>
      <lv-log-timestamp
        slot="timestamp"
        value="1689086655774"
      ></lv-log-timestamp>
      <lv-log-text slot="text">
        <lv-log-word>No highlight</lv-log-word>
        <lv-log-word highlight="4">Highlight</lv-log-word>
        <lv-log-word highlight="2">Another highlight</lv-log-word>
        <lv-log-word highlight="6"></lv-log-word>
        <lv-log-word>Before this was an empty highlight</lv-log-word>
        <lv-log-word highlight="4005"
          >Really large number, module highlight</lv-log-word
        >
        <lv-log-word>Filler</lv-log-word>
        <lv-log-word selected>Selected words...</lv-log-word>
      </lv-log-text>
    </lv-log-line>
  `);

export const Spacing = () =>
  withEventLog(
    withTheme(html`
      <lv-log-line>
        <lv-log-file slot="file" path="src/public/SearchBox.ts"></lv-log-file>
        <lv-log-timestamp
          slot="timestamp"
          value="1689086655774"
        ></lv-log-timestamp>
        <lv-log-text slot="text">
          ${Array.from(Array(50)).map(
            () => html`<lv-log-word>first second</lv-log-word>`
          )}
        </lv-log-text>
      </lv-log-line>
    `),
    ['log-line-word-click']
  );

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
          <lv-log-word>No highlight</lv-log-word>
          <lv-log-word highlight="4">Highlight</lv-log-word>
          <lv-log-word highlight="2">Another highlight</lv-log-word>
          <lv-log-word highlight="6"></lv-log-word>
          <lv-log-word>Before this was an empty highlight</lv-log-word>
          <lv-log-word highlight="4005"
            >Really large number, module highlight</lv-log-word
          >
        </lv-log-text>
      </lv-log-line>
    `),
    ['log-line-word-click']
  );
