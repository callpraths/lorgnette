import { BaseElement } from './BaseElement.js';

/**
 * Base class for elements that do not use shadow DOM.
 *
 * Extend this class for components that do not house any internal styles.
 * Examples include:
 * - Components that render user-visible content should avoid shadow DOM so that content
 *   is accessible to screen readers.
 * - Components that house localized business logic.
 */
export class BaseUnstyledElement<T = unknown> extends BaseElement<T> {
  /**
   * No shadow root - keep all content in light DOM.
   */
  protected createRenderRoot() {
    return this;
  }
}
