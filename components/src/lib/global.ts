import { LogLineEventData } from '../public/log-line.js';
import { LogLineFileDetailsEventData } from '../public/log-line/details/file.js';
import { LogLineTimestampDetailsEventData } from '../public/log-line/details/timestamp.js';
import { LogLineFileEventData } from '../public/log-line/file.js';
import { LogLineTextEventData } from '../public/log-line/text.js';
import { LogLineTimestampEventData } from '../public/log-line/timestamp.js';
import { LogLineWordEventData } from '../public/log-line/word.js';
import { SearchBoxEventData } from '../public/search-box.js';

type CustomEventData = LogLineEventData &
  LogLineFileDetailsEventData &
  LogLineFileEventData &
  LogLineTextEventData &
  LogLineTimestampDetailsEventData &
  LogLineTimestampEventData &
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
