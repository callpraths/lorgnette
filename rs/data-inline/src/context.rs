pub struct Context {
    pub clients: Clients,
}

impl Context {
    pub fn new() -> Self {
        Self {
            clients: Clients { files: Files {} },
        }
    }
}

pub struct Clients {
    pub files: Files,
}

pub struct Files {}

impl Files {
    pub fn load(&mut self, path: String) {
        // ...
    }
}
