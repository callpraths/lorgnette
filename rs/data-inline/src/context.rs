use crate::clients::*;

pub struct Context {}

impl Context {
    pub fn new() -> Self {
        Self {}
    }

    pub fn clients(&mut self) -> &mut impl IClients<Self> {
        self
    }
}

impl IClients<Context> for Context {
    fn files(&mut self) -> &mut Context {
        self
    }
}

impl IFilesClient for Context {
    fn load(&mut self, path: String) {
        println!("load {}", path);
    }
}
