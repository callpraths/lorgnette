import { css, html } from 'lit';
import { state } from 'lit/decorators.js';
import { ref } from 'lit/directives/ref.js';
import { BaseElement } from '../lib/BaseElement.js';
import { LogLineTextOverflowEventData } from './LogLine/Text.js';

/**
 * A line of text in the log.
 *
 * @slot file - The file name. Must be of type {@link LogLineFile}.
 * @slot timestamp - The timestamp. Must be of type {@link LogLineTimestamp}.
 * @slot - The default slot contains the log's text. Must be of type {@link LogLineText}.
 * @fires log-line-text-fold-changed - Fired when the text is expanded or collapsed.
 */
export class LogLine extends BaseElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      gap: 0.25rem;
      background-color: var(--sl-color-neutral-50);
      padding-left: 0.25rem;
      padding-right: 0.25rem;
      padding-top: 0.0625;
      padding-bottom: 0.0625;
    }
    ::slotted(*) {
      display: inline-block;
    }
    ::slotted([slot='file']) {
      flex-shrink: 0;
    }
    ::slotted([slot='timestamp']) {
      flex-shrink: 0;
    }
    ::slotted([slot='text']) {
      flex-grow: 1;
    }
    /* Override the button's styles so it fits in a line of text */
    #fold-button::part(base) {
      min-height: 1rem;
      line-height: 1rem;
    }
    #fold-button::part(label) {
      padding: 0;
    }
    .hidden-fold {
      visibility: hidden;
    }
  `;

  @state()
  private overflow: boolean = false;

  @state()
  private expanded: boolean = false;

  private textElement?: Element;

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('log-line-text-overflow', this.onLogLineTextOverflow);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener(
      'log-line-text-overflow',
      this.onLogLineTextOverflow
    );
  }

  render() {
    return html`
      <slot name="file"></slot>
      <slot name="timestamp"></slot>
      <slot name="text" ${ref(this.textRefChanged)}></slot>
      <sl-button
        variant="text"
        size="small"
        id="fold-button"
        @click="${this.toggleFold}"
        class="${this.foldButtonClass}"
      >
        <lvi-icon-line-fold ?expanded=${this.expanded}></lvi-icon-line-fold>
      </sl-button>
    `;
  }

  private onLogLineTextOverflow = (
    ev: CustomEvent<LogLineTextOverflowEventData>
  ) => {
    this.overflow = ev.detail.overflow;
  };

  /**
   * We initialize the value of `expanded` from the attribute of the
   * slotted in `text`.
   * Once initialized, we manage the value of the attrubite for the slotted
   * in `text` from the value of `expanded`.
   */
  private textRefChanged = (textElement?: Element) => {
    if (textElement === null) {
      return;
    }
    const text = textElement as HTMLSlotElement;
    text.addEventListener('slotchange', () => {
      const elements = text.assignedElements();
      if (elements.length === 0) {
        return;
      }
      // There should only be one element in the slot.
      // If there are more, we'll just use the first one.
      const element = elements[0];
      this.textElement = element;
      this.expanded = element.hasAttribute('expanded');
    });
  };

  private toggleFold = () => {
    this.expanded = !this.expanded;
    // Explicitly set the attribute on slotted in `text`.
    if (this.expanded) {
      // Boolean attribute, so we just set the attribute name.
      this.textElement?.setAttribute('expanded', '');
    } else {
      this.textElement?.removeAttribute('expanded');
    }
  };

  private get foldButtonClass() {
    if (!this.overflow && !this.expanded) {
      // Expanded text never overflows so we don't need to hide the button.
      // Only hide the button if the text is not expanded *and* does not overflow.
      return 'hidden-fold';
    }
    return '';
  }
}
