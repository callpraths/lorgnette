mod utils;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn initialize() {
    utils::set_panic_hook();
}

#[wasm_bindgen]
pub fn greet() -> String {
    "Hello, x-paginate!".to_string()
}
