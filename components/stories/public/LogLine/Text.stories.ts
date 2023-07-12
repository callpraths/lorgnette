import { TemplateResult, html } from 'lit';
import '../../../src/define.js';
import { withTheme } from '../../utils.js';

export default {
  title: 'Public/LogLine/Text',
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

const build = (expanded: boolean, words: TemplateResult[]) =>
  withTheme(html`
    <lv-log-line style="width: 100rem">
      <lv-log-line-file
        slot="file"
        path="src/public/SearchBox.ts"
      ></lv-log-line-file>
      <lv-log-line-timestamp value="1689086655774"></lv-log-line-timestamp>
      <lv-log-line-text ?expanded=${expanded}> ${words} </lv-log-line-text>
    </lv-log-line>
  `);

export const Empty = () => build(false, []);
export const EmptyExpanded = () => build(true, []);
export const ManyWords = () => build(false, [manyWords]);
export const ManyWordsExpanded = () => build(true, [manyWords]);
export const LongWord = () => build(false, [longWord]);
export const LongWordExpanded = () => build(true, [longWord]);
export const LongToken = () => build(false, [longToken]);
export const LongTokenExpanded = () => build(true, [longToken]);
