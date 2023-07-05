import { SearchBoxEventData } from './SearchBox.js';

type CustomEventData = SearchBoxEventData;

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
