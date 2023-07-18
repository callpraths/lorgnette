import { LogLineEventData } from '../public/log-line.js';
import { LogLineTextEventData } from '../public/log-line/text.js';
import { LogLineWordEventData } from '../public/log-line/word.js';
import { SearchBoxEventData } from '../public/search-box.js';

type CustomEventData = LogLineEventData &
  LogLineTextEventData &
  LogLineWordEventData &
  SearchBoxEventData;

declare global {
  interface HTMLElement {
    addEventListener<K extends keyof CustomEventData>(
      type: K,
      listener: (this: HTMLElement, ev: CustomEvent<CustomEventData[K]>) => void
    ): void;
    removeEventListener<K extends keyof CustomEventData>(
      type: K,
      listener: (this: HTMLElement, ev: CustomEvent<CustomEventData[K]>) => void
    ): void;
  }
}
