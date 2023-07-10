import { LitElement, html } from 'lit';
import '../../src/define.js';
import { property } from 'lit/decorators.js';
import { withCard } from '../utils.js';

export default {
  title: 'Internal/Icons/LineFold',
  component: 'lvi-icon-line-fold',
};

export const Default = () =>
  withCard(
    html`Lorem ipsum dolor sit amet, consectetur adipiscing elit
      <lvi-icon-line-fold></lvi-icon-line-fold>`
  );
export const Expanded = () =>
  withCard(
    html`Lorem ipsum dolor sit amet, consectetur adipiscing elit
      <lvi-icon-line-fold expanded></lvi-icon-line-fold>`
  );
export const Highlighted = () =>
  withCard(
    html`Lorem ipsum dolor sit amet, consectetur adipiscing elit
      <lvi-icon-line-fold highlighted></lvi-icon-line-fold>`
  );

// This should stay neutral.
export const FoldedHighlight = () =>
  withCard(
    html`Lorem ipsum dolor sit amet, consectetur adipiscing elit
      <lvi-icon-line-fold expanded highlighted></lvi-icon-line-fold>`
  );

class LineFoldButton extends LitElement {
  @property({ type: Boolean })
  highlighted: boolean = false;

  @property({ type: Boolean })
  expanded: boolean = false;

  render() {
    return html`<sl-button variant="text" @click=${this.toggle}>
      <lvi-icon-line-fold
        ?highlighted=${this.highlighted}
        ?expanded=${this.expanded}
      ></lvi-icon-line-fold>
    </sl-button>`;
  }

  private toggle() {
    this.expanded = !this.expanded;
  }
}

window.customElements.define('sbx-line-fold-button', LineFoldButton);

export const Button = () =>
  withCard(
    html`Lorem ipsum dolor sit amet, consectetur adipiscing elit
      <sbx-line-fold-button></sbx-line-fold-button>`
  );
export const HighlightedButton = () =>
  withCard(
    html`Lorem ipsum dolor sit amet, consectetur adipiscing elit
      <sbx-line-fold-button highlighted></sbx-line-fold-button>`
  );
