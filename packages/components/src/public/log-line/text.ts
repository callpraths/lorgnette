import { css, html } from 'lit';
import { property } from 'lit/decorators.js';
import { ref } from 'lit/directives/ref.js';
import { BaseElement } from '../../lib/base-element.js';

export type LogTextOverflowEventData = {
  overflow: boolean;
};

export type LogTextSelectionEventData = {
  selection: string;
};

export type LogTextEventData = {
  'log-text-overflow': LogTextOverflowEventData;
  'log-text-selection': LogTextSelectionEventData;
};

/**
 * An element to render the text of a log line.
 *
 * @slot - The words that comprise the text. Must be of type {@link LogLineWord} or plain text.
 * @fires - log-text-overflow - Fired when the contents of {@link LogText} overflow / undeflow the container.
 * @fires - log-text-selection - Fired when text within this element is selected.
 */
export class LogText extends BaseElement<LogTextEventData> {
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
    #tailend {
      visibility: hidden;
    }
  `;

  /**
   * Used to detect if the _last_ word of the text intersects with the container 100%.
   *
   * If the intersection is 100%, then the text is not overflowing.
   */
  private intersectionObserver?: IntersectionObserver;

  /**
   * A dummy element used to detect if the _last_ word of the text intersects with the
   * container 100%.
   */
  private tailEnd?: Element;

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
      @mouseup=${this.onMouseUp}
    >
      <slot id="word"></slot>
      <span ${ref(this.tailEndRefChanged)} id="tailend">$$</span>
    </div>`;
  }

  private containerRefChanged = (container?: Element) => {
    if (this.intersectionObserver) {
      if (this.tailEnd) {
        this.intersectionObserver.unobserve(this.tailEnd);
      }
      this.intersectionObserver.disconnect();
    }
    this.intersectionObserver = undefined;
    if (!container) {
      return;
    }

    this.intersectionObserver = new IntersectionObserver(this.updateOverflow, {
      root: container,
      threshold: 1.0,
    });
    if (this.intersectionObserver && this.tailEnd) {
      this.intersectionObserver.observe(this.tailEnd);
    }
  };

  private tailEndRefChanged = (tailEnd?: Element) => {
    if (this.tailEnd && this.intersectionObserver) {
      this.intersectionObserver.unobserve(this.tailEnd);
    }
    this.tailEnd = tailEnd;
    if (this.intersectionObserver && this.tailEnd) {
      this.intersectionObserver.observe(this.tailEnd);
    }
  };

  private updateOverflow = (entries: IntersectionObserverEntry[]) => {
    // No overflow iff the last word is fully visible.
    const entriesByTimeDesc = entries.sort((a, b) => b.time - a.time);
    const overflow =
      entriesByTimeDesc.length > 0 && !entriesByTimeDesc[0].isIntersecting;
    if (overflow === this.lastOverflow) {
      return;
    }
    this.lastOverflow = overflow;
    this.emitCustomEvent('log-text-overflow', {
      overflow,
    });
  };

  private onMouseUp = (event: MouseEvent) => {
    // Prevent the event from bubbling up to the log line.
    event.stopPropagation();
    const selection = document.getSelection()?.toString();
    if (selection) {
      this.emitCustomEvent('log-text-selection', {
        selection,
      });
    }
  };
}
