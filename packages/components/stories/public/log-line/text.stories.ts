import { LitElement, css, html } from 'lit';
import { state } from 'lit/decorators.js';
import '../../../src/define.js';
import {
  longToken,
  longWord,
  manyWords,
  rawLongText,
  rawText,
} from '../../constants.js';
import { logLine, withEventLog, withTheme } from '../../utils.js';

export default {
  title: 'Public/LogLine/Text',
  component: 'lv-log-line',
};

export const Empty = () => withTheme(logLine([]));
export const EmptyExpanded = () => withTheme(logLine([], { expanded: true }));
export const ManyWords = () => withTheme(logLine([manyWords]));
export const ManyWordsExpanded = () =>
  withTheme(logLine([manyWords], { expanded: true }));
export const LongWord = () => withTheme(logLine([longWord]));
export const LongWordExpanded = () =>
  withTheme(logLine([longWord], { expanded: true }));
export const LongToken = () => withTheme(logLine([longToken]));
export const LongTokenExpanded = () =>
  withTheme(logLine([longToken], { expanded: true }));

export const Highlighted = () =>
  withTheme(logLine([manyWords], { highlighted: true }));
export const HighlightedExpanded = () =>
  withTheme(logLine([manyWords], { expanded: true, highlighted: true }));
export const OnlyText = () => withTheme(logLine([rawLongText]));
export const TextAndWords = () =>
  withTheme(logLine([rawText, manyWords, rawText]));
export const LongTextAndWords = () =>
  withTheme(logLine([rawLongText, manyWords, rawLongText]));

export const Events = () =>
  withEventLog(withTheme(logLine([manyWords])), [
    'log-text-fold-changed',
    'log-text-selection',
  ]);

export const All = () =>
  withTheme(html`
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
