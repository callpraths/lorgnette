import { SearchBox, ToggleButton } from './index.js';
import { HighlightPalette, SearchBoxLayout } from './internal/index.js';

window.customElements.define('lv-search-box', SearchBox);
window.customElements.define('lv-toggle-button', ToggleButton);

// Custom elements used internally by this library.
window.customElements.define('lvi-search-box-layout', SearchBoxLayout);
window.customElements.define('lvi-highlight-palette', HighlightPalette);
