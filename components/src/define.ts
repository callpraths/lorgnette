import { SearchBox } from './index.js';
import {
  HighlightPalette,
  LineFold,
  SearchBoxLayout,
  ToggleButton,
} from './internal/index.js';

// Custom elements used internally by this library.
window.customElements.define('lvi-highlight-palette', HighlightPalette);
window.customElements.define('lvi-icon-line-fold', LineFold);
window.customElements.define('lvi-search-box-layout', SearchBoxLayout);
window.customElements.define('lvi-toggle-button', ToggleButton);

window.customElements.define('lv-search-box', SearchBox);
