use std::cell::RefCell;
use std::rc::Rc;
use std::rc::Weak;

use crate::clients::*;
use crate::data::*;

pub struct Context {
    me: Weak<Self>,
    data: RefCell<Data>,
}

struct Data {
    raw_logs: js_sys::ArrayBuffer,
}

impl Context {
    pub fn new() -> Rc<Self> {
        Rc::new_cyclic(|me| Self {
            me: Weak::clone(me),
            data: RefCell::new(Data {
                raw_logs: js_sys::ArrayBuffer::new(0),
            }),
        })
    }

    pub fn clients(&self) -> &Self {
        self
    }
}

impl IClients<Context, Context> for Context {
    fn files(&self) -> &Self {
        self
    }
    fn view(&self) -> &Self {
        self
    }
}

impl IFilesClient for Context {
    fn load(&self, file: web_sys::File) {
        println!("data-inline: loading {}", file.name());
        let me = self.me.upgrade().unwrap();
        wasm_bindgen_futures::spawn_local(async move { me.do_load(file).await });
    }
}

impl Context {
    async fn do_load(&self, file: web_sys::File) {
        let buf = js_sys::ArrayBuffer::from(
            wasm_bindgen_futures::JsFuture::from(file.array_buffer())
                .await
                .unwrap(),
        );
        self.data.borrow_mut().raw_logs = buf;
    }
}

impl IViewClient for Context {
    fn on_update_logs(&self, callback: Box<dyn Fn(Logs)>) {
        println!("on_update_logs");
    }
}
