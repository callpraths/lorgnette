import { html } from 'lit';
import '../../src/define.js';
import { withCard } from '../utils.js';

export default {
  title: 'Icons/LineFold',
  component: 'lvi-icon-line-fold',
};

export const Unfolded = () =>
  withCard(html`<lvi-icon-line-fold></lvi-icon-line-fold>`);
export const Folded = () =>
  withCard(html`<lvi-icon-line-fold folded></lvi-icon-line-fold>`);
export const Highlight = () =>
  withCard(
    html`<lvi-icon-line-fold highlight="3" folded></lvi-icon-line-fold>`
  );
export const MultipleHighlights = () =>
  withCard(
    html`<lvi-icon-line-fold highlight="multiple" folded></lvi-icon-line-fold>`
  );
