use crate::data::*;

pub trait IClients<FilesClient: IFilesClient, ViewClient: IViewClient> {
    fn files(&self) -> &FilesClient;
    fn view(&self) -> &ViewClient;
}

pub trait IFilesClient {
    fn load(&self, file: web_sys::File);
}

pub trait IViewClient {
    fn on_update_logs(&self, callback: Box<dyn Fn(Logs)>);
}
