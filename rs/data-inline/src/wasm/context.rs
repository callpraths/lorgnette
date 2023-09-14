use std::rc::Rc;

use crate::context;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct Context {
    inner: Rc<context::Context>,
}

#[wasm_bindgen]
impl Context {
    pub fn new() -> Self {
        Self {
            inner: context::Context::new(),
        }
    }
}

impl Context {
    pub fn inner(&mut self) -> &Rc<context::Context> {
        &self.inner
    }
}
