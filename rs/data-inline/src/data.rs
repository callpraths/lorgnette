use serde::Serialize;

/**
 * These types should really be exported to WASM and used directly instead of being redefined
 * manually in TypeScript.
 *
 * Following bugs limit the ability to do so:
 * - Can't export Vec<T> where T is an exported type: https://github.com/rustwasm/wasm-bindgen/issues/111
 * - Forced to use a C-style enum due to https://github.com/rustwasm/wasm-bindgen/issues/2407
 */

#[derive(Serialize)]
pub struct Logs {
    pub lines: Vec<LogLine>,
}

#[derive(Serialize)]
pub struct LogLine {
    pub filename: String,
    pub timestamp: String,
    pub words: Vec<LogWord>,
}

#[derive(Serialize)]
pub enum LogWord {
    RawText(LogWordRawText),
    Highlight(LogWordHighlight),
}

#[derive(Serialize)]
pub struct LogWordRawText {
    pub text: String,
}

#[derive(Serialize)]
pub struct LogWordHighlight {
    pub text: String,
}
