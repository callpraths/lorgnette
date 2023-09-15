import "./style.css";
import * as dataInline from "data-inline";

function main() {
  dataInline.initialize();

  const ctx = dataInline.Context.new();
  setupCallbacks(ctx);

  const input = document.querySelector<HTMLInputElement>("#log-file-loader")!;
  input.addEventListener("input", (event) => {
    const file = (event.target as HTMLInputElement).files?.item(0);
    if (!file) {
      return;
    }
    load_file(ctx, file);
  });
}

function setupCallbacks(ctx: dataInline.Context) {
  const viewClient = dataInline.ViewClient.new();
  viewClient.on_update_logs(ctx, (logs: string) => {
    const stage = document.querySelector<HTMLDivElement>("#stage")!;
    stage.innerHTML = `
    <h3>Loaded file:</h3>
    <p>
      <pre>${JSON.stringify(logs, undefined, 2)}</pre>
    </p>
    `;
  }

}

async function load_file(ctx: dataInline.Context, file: File) {
  console.log(file);
  const stage = document.querySelector<HTMLDivElement>("#stage")!;

  const fileClient = dataInline.FilesClient.new();
  fileClient.load(ctx, file);
  stage.innerHTML = `
  <h3>File loaded: ${file.name}</h3>
  <ul>
    <li>Size: ${file.size}</li>
    <li>Type: ${file.type}</li>
  </ul>
  `;
}

main();
