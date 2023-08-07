/**
 * A script to setup the workspace.
 *
 * Run this script after cloning the repository to setup the workspace.
 */

import {
  getDemoPacakges,
  getRustPackages,
  getTypescriptPackages,
  rootDir,
} from "../lib/paths.mjs";
import { notice } from "../lib/log.mjs";
import { simpleExec } from "../lib/exec.mjs";

async function main() {
  // Must compile the Rust packages at least once before setting up workspace
  // If the rust packages have not been compiled, other projects' workspace
  // depenencies will not be able to find the compiled WASM packages.
  notice("Compiling Rust packages");
  for (const path of getRustPackages()) {
    notice(`Compiling ${path}`);
    simpleExec(`wasm-pack build`, { cwd: path });
  }

  notice("Setting up workspace");
  simpleExec(`yarn`, { cwd: rootDir() });

  notice("Setting up TypeScript packages");
  for (const path of getTypescriptPackages()) {
    notice(`Building ${path}`);
    simpleExec(`yarn`, { cwd: path });
  }

  notice("Setting up demo packages");
  for (const path of getDemoPacakges()) {
    notice(`Building ${path}`);
    simpleExec(`yarn`, { cwd: path });
  }
}

await main();
