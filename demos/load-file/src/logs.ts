export type Logs = {
  lines: Array<LogLine>;
};

export type LogLine = {
  filename: string;
  timestamp: string;
  words: Array<LogWord>;
};

export type LogWord = {
  RawText?: LogWordRawText;
  Highlight?: LogWordHighlight;
};

export type LogWordRawText = {
  kind: "raw-text";
  text: string;
};

export type LogWordHighlight = {
  kind: "highlight";
  text: string;
};

export const parseLogs = (raw: unknown): Logs => {
  // const parsed = JSON.parse(raw);
  return raw as Logs;
};
