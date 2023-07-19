import {
  LogLine,
  LogFile,
  LogFileDetails,
  LogText,
  LogTimestamp,
  LogTimestampDetails,
  LogLineWord,
  SearchBox,
} from './index.js';
import {
  HighlightPalette,
  LineFold,
  SearchBoxLayout,
  ToggleButton,
} from './internal/index.js';

// The order of these defines is important. Custom elements that are used by
// other custom elements must be defined first.

// Custom elements used internally by this library.
window.customElements.define('lvi-highlight-palette', HighlightPalette);
window.customElements.define('lvi-icon-line-fold', LineFold);
window.customElements.define('lvi-search-box-layout', SearchBoxLayout);
window.customElements.define('lvi-toggle-button', ToggleButton);

// Custom elements that are part of the public API.
window.customElements.define('lv-log-file', LogFile);
window.customElements.define('lv-log-text', LogText);
window.customElements.define('lv-log-timestamp', LogTimestamp);
window.customElements.define('lv-log-timestamp-details', LogTimestampDetails);
window.customElements.define('lv-log-word', LogLineWord);
window.customElements.define('lv-log-line', LogLine);
window.customElements.define('lv-search-box', SearchBox);
window.customElements.define('lv-log-file-details', LogFileDetails);
