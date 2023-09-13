use crate::clients::*;
use crate::data::*;

pub struct Context {}

impl Context {
    pub fn new() -> Self {
        Self {}
    }

    pub fn clients(&mut self) -> &mut Self {
        self
    }
}

impl IClients<Context, Context> for Context {
    fn files(&mut self) -> &mut Context {
        self
    }
    fn view(&mut self) -> &mut Context {
        self
    }
}

impl IFilesClient for Context {
    fn load(&mut self, file: web_sys::File) {
        println!("data-inline: loading {}", file.name());
        wasm_bindgen_futures::spawn_local(self.do_load(file));
    }
}

impl Context {
    async fn do_load(&mut self, file: web_sys::File) {
        let buf = js_sys::ArrayBuffer::from(
            wasm_bindgen_futures::JsFuture::from(file.array_buffer())
                .await
                .unwrap(),
        );
    }
}

impl IViewClient for Context {
    fn on_update_logs(&mut self, callback: Box<dyn Fn(Logs)>) {
        println!("on_update_logs");
    }
}
