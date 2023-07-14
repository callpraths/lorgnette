import { LogLineTextEventData } from '../public/LogLine/Text.js';
import { SearchBoxEventData } from '../public/SearchBox.js';

type CustomEventData = SearchBoxEventData & LogLineTextEventData;

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
