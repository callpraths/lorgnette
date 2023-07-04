import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class ToggleButton extends LitElement {
  @property({ type: Boolean })
  checked: boolean = false;

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
