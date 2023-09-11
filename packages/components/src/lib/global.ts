import { LogLineEventData } from '../public/log-line.js';
import { LogFileDetailsEventData } from '../public/log-line/details/file.js';
import { LogTimestampDetailsEventData } from '../public/log-line/details/timestamp.js';
import { LogFileEventData } from '../public/log-line/file.js';
import {
  LogTextEventData,
  LogTextSelectionEventData,
} from '../public/log-line/text.js';
import { LogTimestampEventData } from '../public/log-line/timestamp.js';
import { LogLineWordEventData } from '../public/log-line/word.js';
import { SearchBoxEventData } from '../public/search-box.js';

type CustomEventData = LogLineEventData &
  LogFileDetailsEventData &
  LogFileEventData &
  LogTextEventData &
  LogTextSelectionEventData &
  LogTimestampDetailsEventData &
  LogTimestampEventData &
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
