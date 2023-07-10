import { html } from 'lit';
import '../../src/define.js';
import { withCard } from '../utils.js';

export default {
  title: 'Icons/LineFold',
  component: 'lvi-icon-line-fold',
};

export const Default = () =>
  withCard(html`<lvi-icon-line-fold></lvi-icon-line-fold>`);
export const Expanded = () =>
  withCard(html`<lvi-icon-line-fold expanded></lvi-icon-line-fold>`);
export const Highlighted = () =>
  withCard(html`<lvi-icon-line-fold highlighted></lvi-icon-line-fold>`);

// This should stay neutral.
export const FoldedHighlight = () =>
  withCard(
    html`<lvi-icon-line-fold expanded highlighted></lvi-icon-line-fold>`
  );
