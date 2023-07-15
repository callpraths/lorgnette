import { LitElement, TemplateResult, css, html } from 'lit';
import '../../../src/define.js';
import { state } from 'lit/decorators.js';
import { withEventLog, withTheme } from '../../utils.js';

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
      <lv-log-line-timestamp
        slot="timestamp"
        value="1689086655774"
      ></lv-log-line-timestamp>
      <lv-log-line-text slot="text" ?expanded=${expanded}>
        ${words}
      </lv-log-line-text>
    </lv-log-line>
  `;

const withBox = (content: TemplateResult) =>
  withTheme(html`<div style="width: 50rem;">${content}</div>`);

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
          <lv-log-line-file
            slot="file"
            path="src/public/SearchBox.ts"
          ></lv-log-line-file>
          <lv-log-line-timestamp
            slot="timestamp"
            value="1689086655774"
          ></lv-log-line-timestamp>
          <lv-log-line-text id="text" slot="text" ?expanded=${this.expanded}>
            <lv-log-line-word id="first-word">first-word</lv-log-line-word>
          </lv-log-line-text>
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
    const word = document.createElement('lv-log-line-word');
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

export const Events = () =>
  withEventLog(withTheme(html`<sbx-modifyable-text></sbx-modifyable-text>`), [
    'log-line-text-overflow',
  ]);
