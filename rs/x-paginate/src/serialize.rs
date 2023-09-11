use serde::Serialize;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct SerializingContext {
    num_lines: u32,
    width: u32,
}

#[wasm_bindgen]
impl SerializingContext {
    pub fn new(num_lines: u32, width: u32) -> Self {
        SerializingContext { num_lines, width }
    }

    pub fn next(&self) -> JsValue {
        let page = create_page(self.num_lines, self.width);
        serde_wasm_bindgen::to_value(&page).unwrap()
    }
}

#[derive(Serialize)]
struct Page {
    pub lines: Vec<Line>,
}

#[derive(Serialize)]
struct Line {
    pub words: Vec<String>,
}

fn create_page(num_lines: u32, width: u32) -> Page {
    let mut lines = Vec::with_capacity(num_lines as usize);
    for _ in 0..num_lines {
        lines.push(create_line(width));
    }
    Page { lines }
}

fn create_line(width: u32) -> Line {
    let mut words = Vec::with_capacity(width as usize);
    for _ in 0..width {
        words.push("word".to_string());
    }
    Line { words }
}
