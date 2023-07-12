import { TemplateResult, html } from 'lit';
import '../../../src/define.js';
import { withTheme } from '../../utils.js';

export default {
  title: 'Public/LogLine/Text',
  component: 'lv-log-line',
};

const manyWords = html`
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
  <lv-log-line-word>word</lv-log-line-word>
`;
const longWord = html`
  <lv-log-line-word
    >word word word word word word word word word word word word word word word
    word word word word word word word word word word word word word word word
    word word word word word word word word word word word word word word word
    word word word word word word word word word word word word word word word
  </lv-log-line-word>
`;
const longToken = html`
  <lv-log-line-word
    >wordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordword</lv-log-line-word
  >
`;

const logLine = (expanded: boolean, words: TemplateResult[]) =>
  html`
    <lv-log-line>
      <lv-log-line-file
        slot="file"
        path="src/public/SearchBox.ts"
      ></lv-log-line-file>
      <lv-log-line-timestamp value="1689086655774"></lv-log-line-timestamp>
      <lv-log-line-text ?expanded=${expanded}> ${words} </lv-log-line-text>
    </lv-log-line>
  `;

const withBox = (content: TemplateResult) =>
  withTheme(html`<div style="width: 50rem">${content}</div>`);

export const Empty = () => withBox(logLine(false, []));
export const EmptyExpanded = () => withBox(logLine(true, []));
export const ManyWords = () => withBox(logLine(false, [manyWords]));
export const ManyWordsExpanded = () => withBox(logLine(true, [manyWords]));
export const LongWord = () => withBox(logLine(false, [longWord]));
export const LongWordExpanded = () => withBox(logLine(true, [longWord]));
export const LongToken = () => withBox(logLine(false, [longToken]));
export const LongTokenExpanded = () => withBox(logLine(true, [longToken]));
export const All = () =>
  withBox(html`
    ${logLine(false, [])} ${logLine(true, [])} ${logLine(false, [manyWords])}
    ${logLine(true, [manyWords])} ${logLine(false, [longWord])}
    ${logLine(true, [longWord])} ${logLine(false, [longToken])}
    ${logLine(true, [longToken])}
  `);
