import { css, html } from 'lit';
import { property } from 'lit/decorators.js';
import { ref } from 'lit/directives/ref.js';
import { BaseElement } from '../../lib/base-element.js';

export type LogLineTextOverflowEventData = {
  overflow: boolean;
};

export type LogLineTextEventData = {
  'log-line-text-overflow': LogLineTextOverflowEventData;
};

/**
 * An element to render the text of a log line.
 *
 * @slot - The words that comprise the text. Must be of type {@link LogLineWord}.
 * @fires - log-line-text-overflow - Fired when the contents of {@link LogLineText} overflow / undeflow the container.
 */
export class LogLineText extends BaseElement<LogLineTextEventData> {
  static styles = css`
    :host {
      overflow: clip;
    }
    .folded {
      white-space: nowrap;
    }
    .unfolded {
      overflow-wrap: anywhere;
      word-break: break-all;
    }
  `;

  /**
   * Used to detect if the _last_ word of the text intersects with the container 100%.
   *
   * If the intersection is 100%, then the text is not overflowing.
   */
  private intersectionObserver?: IntersectionObserver;

  /**
   * A reference to the last word in the text.
   *
   * We remember this so we can minimize subscription updates to the intersection observer.
   */
  private lastWord?: Element;

  /**
   * Cached value of overflow to avoid emitting duplicate events.
   *
   * Start out undefined so that we emit an initial event.
   */
  private lastOverflow?: boolean;

  /**
   * Whether the text is expanded or not.
   *
   * NB: This attribute is managed by the containing {@link LogLine} element.
   */
  @property({ type: Boolean })
  expanded: boolean = false;

  render() {
    return html`<div
      ${ref(this.containerRefChanged)}
      class="${this.expanded ? 'unfolded' : 'folded'}"
    >
      <slot ${ref(this.slotRefChanged)} id="word"></slot>
    </div>`;
  }

  private containerRefChanged = (container?: Element) => {
    this.intersectionObserver?.disconnect();
    if (container === null) {
      return;
    }
    this.intersectionObserver = new IntersectionObserver(this.updateOverflow, {
      root: container,
      threshold: 1.0,
    });
  };

  private slotRefChanged = (slotElement?: Element) => {
    if (slotElement === null) {
      return;
    }
    const slot = slotElement as HTMLSlotElement;
    slot.addEventListener('slotchange', () => {
      const elements = slot.assignedElements();
      if (elements.length === 0) {
        return;
      }
      const lastWord = elements[elements.length - 1];
      if (lastWord === this.lastWord) {
        return;
      }
      this.lastWord = lastWord;
      this.intersectionObserver?.disconnect();
      this.intersectionObserver?.observe(lastWord);
    });
    // TODO: remove event listener (?) when slot is removed.
  };

  private updateOverflow = (entries: IntersectionObserverEntry[]) => {
    // No overflow iff the last word is fully visible.
    const overflow = entries.length > 0 && !entries[0].isIntersecting;
    if (overflow === this.lastOverflow) {
      return;
    }
    this.lastOverflow = overflow;
    this.emitCustomEvent('log-line-text-overflow', {
      overflow,
    });
  };
}
