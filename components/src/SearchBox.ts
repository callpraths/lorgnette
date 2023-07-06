import { html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { SlInput } from '@shoelace-style/shoelace';
import { BaseElement } from './BaseElement.js';
import { nonEmptyStringOrDefault } from './utils.js';
import { ToggleButton } from './ToggleButton.js';

export type SearchBoxValue = {
  label: string;
  matchCase: boolean;
  matchRegex: boolean;
  matchWholeWord: boolean;
  search: string;
};
export type SearchBoxAcceptEventData = SearchBoxValue;
export type SearchBoxRejectEventData = unknown;
export type SearchBoxEventData = {
  'search-box-accept': SearchBoxAcceptEventData;
  'search-box-reject': SearchBoxRejectEventData;
};

const DEFAULT_PLACEHOLDER = 'Enter a search query...';
const DEFAULT_LABEL_PLACEHOLDER = 'Enter an optional label...';

/**
 * A search box for creating or updating highlights.
 *
 * @fires search-box-accept - when the user accepts the dialog.
 * @fires search-box-reject - when the user rejects the dialog.
 */
export class SearchBox extends BaseElement<SearchBoxEventData> {
  /**
   * The initial value of label for the search box.
   */
  @property()
  public label = '';

  /**
   * The initial value of the search box.
   */
  @property()
  public search = '';

  /**
   * The initial value of whether the search is case sensitive.
   */
  @property({ type: Boolean })
  public matchCase = false;

  /**
   * The initial value of whether the search is a regular expression.
   */
  @property({ type: Boolean })
  public matchRegex = false;

  /**
   * The initial value of whether the search matches whole words.
   */
  @property({ type: Boolean })
  public matchWholeWord = false;

  /**
   * The placeholder text for the search input.
   */
  @property()
  public placeholder = '';

  /**
   * The placeholder text for the label input.
   */
  @property()
  public labelPlaceholder = '';

  render() {
    return html`
      <lvi-search-box-layout>
        <sl-input
          id="search"
          slot="search"
          placeholder="${nonEmptyStringOrDefault(
            this.placeholder,
            DEFAULT_PLACEHOLDER
          )}"
          value="${this.search ?? nothing}"
        ></sl-input>
        <lv-toggle-button
          id="match-case"
          slot="match-case"
          ?checked=${this.matchCase}
          >Aa</lv-toggle-button
        >
        <lv-toggle-button
          id="match-whole-word"
          slot="match-whole-word"
          ?checked=${this.matchWholeWord}
          ><u>az</u></lv-toggle-button
        >
        <lv-toggle-button
          id="match-regex"
          slot="match-regex"
          ?checked=${this.matchRegex}
          >.*</lv-toggle-button
        >
        <sl-input
          id="label"
          slot="label"
          placeholder=${nonEmptyStringOrDefault(
            this.labelPlaceholder,
            DEFAULT_LABEL_PLACEHOLDER
          )}
          value="${this.label ?? nothing}"
        ></sl-input>
        <sl-button slot="accept" variant="text" @click=${this.accept}
          >✓</sl-button
        >
        <sl-button slot="reject" variant="text" @click=${this.reject}
          >🗙</sl-button
        >
      </lvi-search-box-layout>
    `;
  }

  /**
   * The current value of the search box.
   *
   * This value is not reflected onto the DOM.
   */
  public get value(): SearchBoxValue {
    const root = this;
    const search = root.querySelector('#search') as SlInput;
    const label = root.querySelector('#label') as SlInput;
    const matchCase = root.querySelector('#match-case') as ToggleButton;
    const matchRegex = root.querySelector('#match-regex') as ToggleButton;
    const matchWholeWord = root.querySelector(
      '#match-whole-word'
    ) as ToggleButton;

    return {
      label: label.value,
      matchCase: matchCase.value,
      matchRegex: matchRegex.value,
      matchWholeWord: matchWholeWord.value,
      search: search.value,
    };
  }

  /**
   * No shadow root - keep all content in light DOM.
   */
  protected createRenderRoot() {
    return this;
  }

  private accept() {
    this.emitCustomEvent('search-box-accept', this.value);
  }

  private reject() {
    this.emitCustomEvent('search-box-reject', undefined);
  }
}
