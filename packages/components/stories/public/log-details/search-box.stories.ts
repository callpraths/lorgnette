import { html } from 'lit';
import '../../../src/define.js';
import { logLine, withBox } from './utils.js';

export default {
  title: 'Public/LogDetails/SearchBox',
  component: 'lv-log-line',
};

export const Default = () =>
  withBox(html`<lv-log-details-popup>
    ${logLine([
      html`<lv-log-word>A quick</lv-log-word>`,
      html`<lv-log-word>brown fox</lv-log-word>`,
      html`<lv-log-word>jumped over</lv-log-word>`,
      html`<lv-log-word selected>the lazy</lv-log-word>`,
      html`<lv-log-word>dog</lv-log-word>`,
    ])}
    <lv-search-box slot="popup-content"></lv-search-box>
  </lv-log-details-popup>`);

export const Highlight = () =>
  withBox(html`<lv-log-details-popup>
    ${logLine([
      html`<lv-log-word>A quick</lv-log-word>`,
      html`<lv-log-word>brown fox</lv-log-word>`,
      html`<lv-log-word>jumped over</lv-log-word>`,
      html`<lv-log-word selected highlight="5">the lazy</lv-log-word>`,
      html`<lv-log-word>dog</lv-log-word>`,
    ])}
    <lv-search-box highlight="5" slot="popup-content"></lv-search-box>
  </lv-log-details-popup>`);

export const Expanded = () =>
  withBox(html`<lv-log-details-popup>
    ${logLine(
      [
        ...Array.from(Array(40)).map(
          () => html`<lv-log-word>prefix</lv-log-word>`
        ),
        html`<lv-log-word selected>I am the one</lv-log-word>`,
        ...Array.from(Array(40)).map(
          () => html`<lv-log-word>suffix</lv-log-word>`
        ),
      ],
      { expanded: true }
    )}
    <lv-search-box slot="popup-content"></lv-search-box>
  </lv-log-details-popup>`);
