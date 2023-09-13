use crate::context;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct Context {
    inner: Box<context::Context>,
}

impl Context {
    pub fn inner(&mut self) -> &mut context::Context {
        &mut self.inner
    }

    pub fn new() -> Self {
        Self {
            inner: Box::new(context::Context::new()),
        }
    }
}
