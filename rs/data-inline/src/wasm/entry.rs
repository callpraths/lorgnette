use crate::{utils, wasm::context::Context};
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn new() -> Context {
    Context::new()
}

#[wasm_bindgen]
pub fn initialize() {
    utils::set_panic_hook();
}
