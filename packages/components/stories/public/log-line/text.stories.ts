import { LitElement, TemplateResult, css, html } from 'lit';
import '../../../src/define.js';
import { state } from 'lit/decorators.js';
import { withEventLog, withTheme } from '../../utils.js';

export default {
  title: 'Public/LogLine/Text',
  component: 'lv-log-line',
};

const manyWords = html`
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
  <lv-log-word>word</lv-log-word>
`;
const longWord = html`
  <lv-log-word
    >word word word word word word word word word word word word word word word
    word word word word word word word word word word word word word word word
    word word word word word word word word word word word word word word word
    word word word word word word word word word word word word word word word
  </lv-log-word>
`;
const longToken = html`
  <lv-log-word
    >wordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordwordword</lv-log-word
  >
`;
const rawText = html`text`;
const rawLongText = html`longtext longtext longtext longtext longtext longtext
longtext longtext longtext longtext longtext longtext longtext longtext longtext
longtext longtext longtext longtext longtext longtext longtext longtext longtext
longtext longtext longtext longtext longtext longtext longtext longtext longtext
longtext longtext longtext longtext longtext longtext longtext longtext longtext
longtext longtext`;

const logLine = (
  words: TemplateResult[],
  options?: { expanded?: boolean; highlighted?: boolean }
) =>
  html`
    <lv-log-line ?highlighted=${options?.highlighted ?? false}>
      <lv-log-file slot="file" path="src/public/SearchBox.ts"></lv-log-file>
      <lv-log-timestamp
        slot="timestamp"
        value="1689086655774"
      ></lv-log-timestamp>
      <lv-log-text slot="text" ?expanded=${options?.expanded ?? false}>
        ${words}
      </lv-log-text>
    </lv-log-line>
  `;

const withBox = (content: TemplateResult) =>
  withTheme(html`<div style="width: 50rem;">${content}</div>`);

export const Empty = () => withBox(logLine([]));
export const EmptyExpanded = () => withBox(logLine([], { expanded: true }));
export const ManyWords = () => withBox(logLine([manyWords]));
export const ManyWordsExpanded = () =>
  withBox(logLine([manyWords], { expanded: true }));
export const LongWord = () => withBox(logLine([longWord]));
export const LongWordExpanded = () =>
  withBox(logLine([longWord], { expanded: true }));
export const LongToken = () => withBox(logLine([longToken]));
export const LongTokenExpanded = () =>
  withBox(logLine([longToken], { expanded: true }));

export const Highlighted = () =>
  withBox(logLine([manyWords], { highlighted: true }));
export const HighlightedExpanded = () =>
  withBox(logLine([manyWords], { expanded: true, highlighted: true }));
export const OnlyText = () => withBox(logLine([rawLongText]));
export const TextAndWords = () =>
  withBox(logLine([rawText, manyWords, rawText]));
export const LongTextAndWords = () =>
  withBox(logLine([rawLongText, manyWords, rawLongText]));

export const Events = () =>
  withEventLog(withBox(logLine([manyWords])), [
    'log-text-fold-changed',
    'log-text-selection',
  ]);

export const All = () =>
  withBox(html`
    ${logLine([])} ${logLine([], { expanded: true })} ${logLine([manyWords])}
    ${logLine([manyWords], { expanded: true })} ${logLine([longWord])}
    ${logLine([longWord], { expanded: true })} ${logLine([longToken])}
    ${logLine([longToken], { expanded: true })}
    ${logLine([manyWords], { highlighted: true })}
    ${logLine([manyWords], { expanded: true, highlighted: true })}
  `);

class ModifyableText extends LitElement {
  static styles = css`
    #buttons {
      display: flex;
      flex-direction: row;
      gap: 1rem;
    }
  `;

  @state()
  expanded: boolean = false;

  render() {
    return html` <div style="width: 50rem;">
        <lv-log-line>
          <lv-log-file slot="file" path="src/public/SearchBox.ts"></lv-log-file>
          <lv-log-timestamp
            slot="timestamp"
            value="1689086655774"
          ></lv-log-timestamp>
          <lv-log-text id="text" slot="text" ?expanded=${this.expanded}>
            <lv-log-word id="first-word">first-word</lv-log-word>
          </lv-log-text>
        </lv-log-line>
      </div>

      <sl-divider></sl-divider>

      <div id="buttons">
        <sl-button-group>
          <sl-button @click=${this.addWord}>Add word</sl-button>
          <sl-button @click=${this.removeWord}>Remove word</sl-button>
        </sl-button-group>
        <sl-button-group>
          <sl-button @click=${this.expandFirstWord}
            >Expand First Word</sl-button
          >
          <sl-button @click=${this.contractFirstWord}
            >Contract First Word</sl-button
          >
        </sl-button-group>
        <sl-button @click=${this.toggleExpanded}>Toggle Expanded</sl-button>
      </div>`;
  }

  private addWord() {
    const text = this.shadowRoot!.querySelector('#text')!;
    const word = document.createElement('lv-log-word');
    word.textContent = ' word';
    text.appendChild(word);
  }

  private removeWord() {
    const text = this.shadowRoot!.querySelector('#text')!;
    if (text.children.length === 1) {
      return;
    }
    const word = text.children[text.children.length - 1];
    text.removeChild(word);
  }

  private expandFirstWord() {
    const word = this.shadowRoot!.querySelector('#first-word')!;
    word.innerHTML += `-l${word.innerHTML.length}`;
  }

  private contractFirstWord() {
    const word = this.shadowRoot!.querySelector('#first-word')!;
    const index = word.innerHTML.lastIndexOf('-');
    if (index > 0) {
      word.innerHTML = word.innerHTML.substring(0, index);
    }
  }

  private toggleExpanded() {
    this.expanded = !this.expanded;
  }
}
window.customElements.define('sbx-modifyable-text', ModifyableText);

export const InternalEvents = () =>
  withEventLog(withTheme(html`<sbx-modifyable-text></sbx-modifyable-text>`), [
    'log-text-overflow',
  ]);
