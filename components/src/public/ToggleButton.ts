import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { BaseUnstyledElement } from '../lib/BaseUnstyledElement.js';

/**
 * A button that remembers its toggle state.
 *
 * This button does not trigger any specific event when toggled.
 * Instead, clients must read the `value` property to determine
 * its state.
 *
 * @slot - The button's content.
 */
export class ToggleButton extends BaseUnstyledElement {
  /**
   * The initial toggle state of the button.
   */
  @property({ type: Boolean })
  checked: boolean = false;

  /**
   * The current toggle state of the button.
   */
  @property({ type: Boolean, reflect: true })
  value: boolean = false;

  connectedCallback() {
    super.connectedCallback();
    this.value = this.checked;
  }

  render() {
    const variant = this.value ? 'primary' : 'text';
    return html`<sl-button variant="${variant}" @click=${this.onClick}
      ><slot></slot
    ></sl-button>`;
  }

  private onClick() {
    this.value = !this.value;
  }
}
