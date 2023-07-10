import { html } from 'lit';
import '../../src/define.js';
import { withTheme } from '../utils.js';

export default {
  title: 'Icons/LineFold',
  component: 'lvi-icon-line-fold',
};

export const Unfolded = () =>
  withTheme(html`<lvi-icon-line-fold></lvi-icon-line-fold>`);
export const Folded = () =>
  withTheme(html`<lvi-icon-line-fold folded></lvi-icon-line-fold>`);
export const Highlight = () =>
  withTheme(
    html`<lvi-icon-line-fold highlight="3" folded></lvi-icon-line-fold>`
  );
export const MultipleHighlights = () =>
  withTheme(
    html`<lvi-icon-line-fold highlight="multiple" folded></lvi-icon-line-fold>`
  );
