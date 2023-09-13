use crate::wasm::context::Context;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn load(mut ctx: Context, path: String) {
    ctx.inner().clients.files.load(path)
}
