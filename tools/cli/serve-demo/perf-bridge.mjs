import { simpleExecAsync } from "../../lib/exec.mjs";
import {
  demoPackageDir,
  rustPackageDir,
  typescriptPackageDir,
} from "../../lib/paths.mjs";

async function main() {
  const packages = [
    demoPackageDir("perf-bridge"),
    typescriptPackageDir("components"),
    rustPackageDir("x-paginate"),
  ];
  await Promise.all([
    simpleExecAsync("demo", `yarn dev`, { cwd: demoPackageDir("perf-bridge") }),
    simpleExecAsync(
      "x-paginate",
      `cargo watch -i .gitignore -i \"pkg/*\" -s \"wasm-pack build\"`,
      { cwd: rustPackageDir("x-paginate") }
    ),
    simpleExecAsync("components", `yarn build:watch`, {
      cwd: typescriptPackageDir("components"),
    }),
  ]);
}

await main();
