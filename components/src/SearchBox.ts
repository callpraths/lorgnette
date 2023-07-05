import { css, html, nothing } from 'lit';
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
  static styles = css`
    :host {
      width: 100%;
    }
    #card {
      width: 100%;
      --padding: 0.125rem;
    }
    #container {
      display: flex;
      flex-flow: column nowrap;
      gap: 0.125rem;
    }
    #top {
      display: flex;
      flex-flow: row nowrap;
      gap: 1rem;
    }
    #search {
      flex-grow: 1;
    }
    #bottom {
      display: flex;
      flex-flow: row nowrap;
      gap: 1rem;
    }
    #label {
      flex-grow: 1;
    }
    #bottom-fill {
      flex-grow: 3;
    }
  `;

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
      <sl-card id="card" class="card-basic">
        <div id="container">
          <div id="top">
            <sl-input
              id="search"
              placeholder="${nonEmptyStringOrDefault(
                this.placeholder,
                DEFAULT_PLACEHOLDER
              )}"
              value="${this.search ?? nothing}"
            ></sl-input>
            <div>
              <lv-toggle-button id="match-case" ?checked=${this.matchCase}
                >Aa</lv-toggle-button
              >
              <lv-toggle-button
                id="match-whole-word"
                ?checked=${this.matchWholeWord}
                ><u>az</u></lv-toggle-button
              >
              <lv-toggle-button id="match-regex" ?checked=${this.matchRegex}
                >.*</lv-toggle-button
              >
            </div>
          </div>
          <div id="bottom">
            <sl-input
              id="label"
              placeholder=${nonEmptyStringOrDefault(
                this.labelPlaceholder,
                DEFAULT_LABEL_PLACEHOLDER
              )}
              value="${this.label ?? nothing}"
            ></sl-input>
            <div id="bottom-fill"></div>
            <div label="dismiss dialog">
              <sl-button variant="text" @click=${this.accept}>✓</sl-button>
              <sl-button variant="text" @click=${this.reject}>🗙</sl-button>
            </div>
          </div>
        </div>
      </sl-card>
    `;
  }

  /**
   * The current value of the search box.
   *
   * This value is not reflected onto the DOM.
   */
  public get value(): SearchBoxValue {
    const search = this.shadowRoot?.querySelector('#search') as SlInput;
    const label = this.shadowRoot?.querySelector('#label') as SlInput;
    const matchCase = this.shadowRoot?.querySelector(
      '#match-case'
    ) as ToggleButton;
    const matchRegex = this.shadowRoot?.querySelector(
      '#match-regex'
    ) as ToggleButton;
    const matchWholeWord = this.shadowRoot?.querySelector(
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

  private accept() {
    this.emitCustomEvent('search-box-accept', this.value);
  }

  private reject() {
    this.emitCustomEvent('search-box-reject', undefined);
  }
}
