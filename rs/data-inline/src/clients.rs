use crate::data::*;

pub trait IClients<FilesClient: IFilesClient, ViewClient: IViewClient> {
    fn files(&mut self) -> &mut FilesClient;
    fn view(&mut self) -> &mut ViewClient;
}

pub trait IFilesClient {
    fn load(&mut self, path: String);
}

pub trait IViewClient {
    fn on_update_logs(&mut self, callback: Box<dyn Fn(Logs)>);
}
