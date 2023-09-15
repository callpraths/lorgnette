use std::cell::RefCell;
use std::rc::Rc;
use std::rc::Weak;

use crate::clients::*;
use crate::data::*;

pub struct Context {
    me: Weak<Self>,
    callbacks: RefCell<Callbacks>,
    data: RefCell<Data>,
}

struct Callbacks {
    on_update_logs: Option<Box<dyn Fn(Logs)>>,
}

struct Data {
    raw_logs: String,
}

impl Context {
    pub fn new() -> Rc<Self> {
        Rc::new_cyclic(|me| Self {
            me: Weak::clone(me),
            callbacks: RefCell::new(Callbacks {
                on_update_logs: None,
            }),
            data: RefCell::new(Data {
                raw_logs: "".to_string(),
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
        wasm_bindgen_futures::spawn_local(async move {
            let text = wasm_bindgen_futures::JsFuture::from(file.text())
                .await
                .unwrap();
            {
                // Be extra careful to manage scope of RefCell borrow.
                me.data.borrow_mut().raw_logs = text.as_string().unwrap().into();
            }
            // This will likely be a different "manager" as we gain more internal structure.
            // For now, split the work of loading the file and notifying the view into separate JS-microtasks.
            wasm_bindgen_futures::spawn_local(async move {
                me.notify_new_logs();
            })
        });
    }
}

impl Context {
    fn notify_new_logs(&self) {
        let raw_logs = &self.data.borrow().raw_logs;
        let logs = Logs {
            lines: raw_logs
                .lines()
                .map(|raw_line| LogLine {
                    filename: "unknown".to_string(),
                    timestamp: "1694734978537".to_string(),
                    words: raw_line
                        .split(" ")
                        .map(|raw_word| {
                            LogWord::RawText(LogWordRawText {
                                text: raw_word.to_string(),
                            })
                        })
                        .collect(),
                })
                .collect::<Vec<LogLine>>(),
        };

        let callbacks = &self.callbacks.borrow();
        if let Some(on_update_logs) = &callbacks.on_update_logs {
            on_update_logs(logs);
        }
    }
}

impl IViewClient for Context {
    fn on_update_logs(&self, callback: Box<dyn Fn(Logs)>) {
        let mut callbacks = self.callbacks.borrow_mut();
        callbacks.on_update_logs = Some(callback);
    }
}
