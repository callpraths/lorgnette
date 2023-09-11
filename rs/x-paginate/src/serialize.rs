use serde::Serialize;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct SerializingContext {
    num_lines: u32,
    block_width: u32,
    block_count: u32,
}

#[wasm_bindgen]
impl SerializingContext {
    pub fn new(num_lines: u32, block_width: u32, block_count: u32) -> Self {
        SerializingContext {
            num_lines,
            block_width,
            block_count,
        }
    }

    pub fn next(&self) -> JsValue {
        let page = create_page(self.num_lines, self.block_width, self.block_count);
        serde_wasm_bindgen::to_value(&page).unwrap()
    }
}

#[derive(Serialize)]
struct Page {
    pub lines: Vec<Line>,
}

#[derive(Serialize)]
struct Line {
    pub words: Vec<Word>,
}

#[derive(Serialize)]
struct Word {
    pub text: String,
    pub highlight: bool,
}

fn create_page(num_lines: u32, block_width: u32, block_count: u32) -> Page {
    let mut template = Vec::with_capacity(block_width as usize);
    for _ in 0..block_width {
        template.push("word".to_string());
    }

    let mut lines = Vec::with_capacity(num_lines as usize);
    for _ in 0..num_lines {
        lines.push(create_line(block_count, &template.join(" ")));
    }
    Page { lines }
}

fn create_line(block_count: u32, template: &str) -> Line {
    let mut words = Vec::with_capacity((2 * block_count + 1) as usize);
    for _ in 0..block_count {
        words.push(Word {
            text: template.to_string(),
            highlight: false,
        });
        words.push(Word {
            text: template.to_string(),
            highlight: true,
        });
    }
    words.push(Word {
        text: template.to_string(),
        highlight: false,
    });
    Line { words }
}
