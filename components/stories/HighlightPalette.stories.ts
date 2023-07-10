import { html } from 'lit';
import '../src/define.js';
import { withTheme } from './utils.js';

export default {
  title: 'Internal/HighlightPalette',
  component: 'lvi-highlight-palette',
};

export const Default = () =>
  withTheme(html`
    <sl-card class="card-basic">
      <lvi-highlight-palette></lvi-highlight-palette>
    </sl-card>
  `);
