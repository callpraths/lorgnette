import { SlInput } from '@shoelace-style/shoelace';
import { html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { Ref, createRef, ref } from 'lit/directives/ref.js';
import { ToggleButton } from '../internal/ToggleButton.js';
import { nonEmptyStringOrDefault } from '../lib/utils.js';
import { BaseUnstyledElement } from '../lib/BaseUnstyledElement.js';

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
export class SearchBox extends BaseUnstyledElement<SearchBoxEventData> {
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

  /**
   * Optional highlight index associated with current search.
   */
  @property({ type: Number })
  public highlight: number | undefined;

  private searchRef: Ref<SlInput> = createRef();

  private labelRef: Ref<SlInput> = createRef();

  private matchCaseRef: Ref<ToggleButton> = createRef();

  private matchRegexRef: Ref<ToggleButton> = createRef();

  private matchWholeWordRef: Ref<ToggleButton> = createRef();

  render() {
    return html`
      <lvi-search-box-layout highlight=${this.highlight ?? nothing}>
        <sl-input
          ${ref(this.searchRef)}
          slot="search"
          placeholder="${nonEmptyStringOrDefault(
            this.placeholder,
            DEFAULT_PLACEHOLDER
          )}"
          value="${this.search ?? nothing}"
        ></sl-input>
        <lvi-toggle-button
          ${ref(this.matchCaseRef)}
          slot="match-case"
          ?checked=${this.matchCase}
          >Aa</lvi-toggle-button
        >
        <lvi-toggle-button
          ${ref(this.matchWholeWordRef)}
          slot="match-whole-word"
          ?checked=${this.matchWholeWord}
          ><u>az</u></lvi-toggle-button
        >
        <lvi-toggle-button
          ${ref(this.matchRegexRef)}
          slot="match-regex"
          ?checked=${this.matchRegex}
          >.*</lvi-toggle-button
        >
        <sl-input
          ${ref(this.labelRef)}
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
    return {
      label: this.labelRef.value?.value ?? '',
      matchCase: !!this.matchCaseRef.value?.value,
      matchRegex: !!this.matchRegexRef.value?.value,
      matchWholeWord: !!this.matchWholeWordRef.value?.value,
      search: this.searchRef.value?.value ?? '',
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
