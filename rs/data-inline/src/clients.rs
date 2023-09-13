pub trait IClients<FilesClientImpl: IFilesClient> {
    fn files(&mut self) -> &mut FilesClientImpl;
}

pub trait IFilesClient {
    fn load(&mut self, path: String);
}
