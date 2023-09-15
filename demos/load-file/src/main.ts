import * as dataInline from "data-inline";
import "lorgnette-components/define.js";
import { parseLogs } from "./logs";
import "./style.css";

let _ctx: dataInline.Context | undefined;

function main() {
  initialize();
  setupCallbacks(ctx());

  const input = document.querySelector<HTMLInputElement>("#log-file-loader")!;
  input.addEventListener("input", (event) => {
    const file = (event.target as HTMLInputElement).files?.item(0);
    if (!file) {
      return;
    }
    load_file(file);
  });
}

function setupCallbacks(ctx: dataInline.Context) {
  dataInline.ViewClient.on_update_logs(ctx, (rawLogs: string) => {
    const stage = document.querySelector<HTMLDivElement>("#stage")!;
    const logs = parseLogs(rawLogs);
    const logsHTML = logs.lines
      .map(
        (line) => `
    <lv-log-line>
      <lv-log-file slot="file" path="${line.filename}"></lv-log-file>
      <lv-log-timestamp slot="timestamp" value="${
        line.timestamp
      }"></lv-log-timestamp>
      <lv-log-text id="text" slot="text">
        ${line.words
          .map(
            (word) => `
          <lv-log-word>${word.RawText?.text}</lv-log-word>
        `
          )
          .join(" ")}
      </lv-log-text>
    </lv-log-line>
    `
      )
      .join(" ");
    stage.innerHTML = `
          <lv-layout-main-window>
            <lv-layout-logs-pane slot="logs-pane">
              ${logsHTML}
            </lv-layout-logs-pane>
            <div style="background-color: gray;" slot="toolbar-pane"></div>
          </lv-layout-main-window>
    `;
  });
}

async function load_file(file: File) {
  console.log(file);
  dataInline.FilesClient.load(ctx(), file);
}

function ctx() {
  if (!_ctx) {
    throw new Error(`No context yet`);
  }
  return _ctx;
}

function initialize() {
  dataInline.initialize();
  // Note: `_ctx` is currently leaked at app teardown.
  _ctx = dataInline.Context.new();
}

main();
