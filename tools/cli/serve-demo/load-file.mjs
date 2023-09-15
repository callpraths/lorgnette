import { simpleExecAsync } from "../../lib/exec.mjs";
import {
  demoPackageDir,
  rustPackageDir,
  typescriptPackageDir,
} from "../../lib/paths.mjs";

async function main() {
  const packages = [
    demoPackageDir("load-file"),
    typescriptPackageDir("components"),
    rustPackageDir("data-inline"),
  ];
  await Promise.all([
    simpleExecAsync("demo", `yarn dev`, { cwd: demoPackageDir("load-file") }),
    simpleExecAsync(
      "data-inline",
      `cargo watch -i .gitignore -i \"pkg/*\" -s \"wasm-pack build\"`,
      { cwd: rustPackageDir("data-inline") }
    ),
    simpleExecAsync("components", `yarn build:watch`, {
      cwd: typescriptPackageDir("components"),
    }),
  ]);
}

await main();
