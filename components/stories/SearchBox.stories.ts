import { html } from 'lit';
import '../src/define.js';
import { withEventLog, withTheme } from './utils.js';

export default {
  title: 'SearchBox',
  component: 'lv-search-box',
};

export const Default = () => withTheme(html`<lv-search-box></lv-search-box>`);
export const Highlight = () =>
  withTheme(html`<lv-search-box highlight="2"></lv-search-box>`);
export const MatchCase = () =>
  withTheme(html`<lv-search-box matchcase></lv-search-box>`);
export const MatchRegex = () =>
  withTheme(html`<lv-search-box matchregex></lv-search-box>`);
export const MatchWholeWord = () =>
  withTheme(html`<lv-search-box matchwholeword></lv-search-box>`);
export const Placeholder = () =>
  withTheme(
    html`<lv-search-box placeholder="Custom placeholder"></lv-search-box>`
  );
export const LabelPlaceholder = () =>
  withTheme(
    html`<lv-search-box
      labelplaceholder="Custom label placeholder"
    ></lv-search-box>`
  );
export const Search = () =>
  withTheme(html`<lv-search-box search="Custom search"></lv-search-box>`);
export const Label = () =>
  withTheme(html`<lv-search-box label="Custom label"></lv-search-box>`);
export const Events = () =>
  withTheme(
    withEventLog(html`<lv-search-box></lv-search-box>`, [
      'search-box-accept',
      'search-box-reject',
    ])
  );
