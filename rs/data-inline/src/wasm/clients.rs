use crate::clients::*;
use crate::data::*;
use crate::wasm::context::Context;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct FilesClient {}

#[wasm_bindgen]
impl FilesClient {
    pub fn load(mut ctx: Context, path: String) {
        ctx.inner().clients().files().load(path)
    }
}

#[wasm_bindgen]
pub struct ViewClient {}

#[wasm_bindgen]
impl ViewClient {
    pub fn on_update_logs(mut ctx: Context, callback: js_sys::Function) {
        let callback = Box::new(move |logs: Logs| {
            let logs = serde_wasm_bindgen::to_value(&logs).unwrap();
            callback.call1(&JsValue::NULL, &logs).unwrap();
        });
        ctx.inner().clients().view().on_update_logs(callback)
    }
}
