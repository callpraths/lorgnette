import { LitElement } from 'lit';

/**
 * A base class for custom elements.
 */
export class BaseElement<T = unknown> extends LitElement {
  /**
   * Type safe method to emit custom events.
   */
  protected emitCustomEvent<K extends keyof T & string>(type: K, detail: T[K]) {
    this.dispatchEvent(
      new CustomEvent(type, { detail, bubbles: true, composed: true })
    );
  }
}
