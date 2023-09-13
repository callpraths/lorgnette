use crate::utils;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn initialize() {
    utils::set_panic_hook();
}
