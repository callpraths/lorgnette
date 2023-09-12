import { css, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { ref } from 'lit/directives/ref.js';
import { BaseElement } from '../lib/base-element.js';
import { LogTextOverflowEventData } from './log-line/text.js';
import { mainBackgroundColor } from '../lib/styles.js';

export type LogTextFoldChangedEventData = {
  expanded: boolean;
};

export type LogLineEventData = {
  'log-text-fold-changed': LogTextFoldChangedEventData;
};

/**
 * A line of text in the log.
 *
 * @slot file - The file name. Must be of type {@link LogFile}.
 * @slot timestamp - The timestamp. Must be of type {@link LogTimestamp}.
 * @slot - The default slot contains the log's text. Must be of type {@link LogText}.
 * @fires log-text-fold-changed - Fired when the text is expanded or collapsed.
 */
export class LogLine extends BaseElement<LogLineEventData> {
  static styles = css`
    #container {
      width: 100%;

      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      gap: 0.25rem;
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
      min-height: 0rem;
      line-height: 0rem;
    }
    #fold-button::part(label) {
      padding: 0;
    }
    .hidden-fold {
      visibility: hidden;
    }
  `;

  /**
   * Whenther the line of log contains a highlighted word.
   */
  @property({ type: Boolean })
  highlighted: boolean = false;

  @state()
  private overflow: boolean = false;

  @state()
  private expanded: boolean = false;

  private textElement?: Element;

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('log-text-overflow', this.onLogTextOverflow);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('log-text-overflow', this.onLogTextOverflow);
  }

  render() {
    return html`
      <div id="container">
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
          <lvi-icon-line-fold
            ?expanded=${this.expanded}
            ?highlighted=${this.highlighted}
          ></lvi-icon-line-fold>
        </sl-button>
      </div>
    `;
  }

  private onLogTextOverflow = (ev: CustomEvent<LogTextOverflowEventData>) => {
    this.overflow = ev.detail.overflow;
  };

  /**
   * We initialize the value of `expanded` from the attribute of the
   * slotted in `text`.
   * Once initialized, we manage the value of the attrubite for the slotted
   * in `text` from the value of `expanded`.
   */
  private textRefChanged = (textElement?: Element) => {
    if (!(textElement instanceof HTMLSlotElement)) {
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
    this.emitCustomEvent('log-text-fold-changed', {
      expanded: this.expanded,
    });
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
