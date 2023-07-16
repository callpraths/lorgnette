import { LogLineEventData } from '../public/LogLine.js';
import { LogLineTextEventData } from '../public/LogLine/Text.js';
import { LogLineWordEventData } from '../public/LogLine/Word.js';
import { SearchBoxEventData } from '../public/SearchBox.js';

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
