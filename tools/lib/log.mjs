export function notice(message) {
  console.log(`${blue("[NOTICE]")} ${message}`);
}

export function blue(message) {
  return `\x1b[34m${message}\x1b[0m`;
}

export function red(message) {
  return `\x1b[31m${message}\x1b[0m`;
}
