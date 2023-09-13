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
    fn load(&mut self, path: String) {
        println!("load {}", path);
    }
}

impl IViewClient for Context {
    fn on_update_logs(&mut self, callback: Box<dyn Fn(Logs)>) {
        println!("on_update_logs");
    }
}
