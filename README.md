# lorgnette

I look at logs, a lot. I highlight and copy text, always. So make it easy, eh?

# Project organisation

This monorepository is a [yarn workspace](https://yarnpkg.com/features/workspaces) with a single worktree rooted at the repository root. There are three kinds of packages:

- [packages/](./packages/) contain typescript packages.
  - [packages/components](./packges/components) contains web components for the UI elements in lorgnette.
- [rs/](./rs/) contains [Rust](https://www.rust-lang.org) packages that are compiled to WASM.
  - [rs/x-paginate](./rs/x-paginate) is a small WASM library used to benchmark the JS-WASM bridge for paginated
    logs.
  - [rs/data-inline](./rs/data-inline/) is the WASM backend for WASM.
- [demos/](./demos/) contains various demo apps, written in [Vue.js](https://vuejs.org/) using the components and WASM packages defined above.
  - [demos/perf-bridge](./demos/perf-bridge) is a demo app that benchmarks the JS-WASM bridge for paginated logs.
  - [demos/load-file](./demos/load-file/) is a demo app that loads a file and displays it in a log viewer.

In-tree dependencies are specified in package.json files as `"lorgnette-components": "*"` etc.

# Development environment

- Use [vscode](https://code.visualstudio.com/) for development.
- Vue.js: Install the [Volar vscode extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar) and [Volar Typescript Plugin](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

# Developer setup

This project uses yarn workspaces and wasm-pack which requires the initial setup to be in a specific order.
To do it the right way, run the following command in the root of the repository:

```sh
node tools/cli/setup.mjs
```

# Developer workflow

You can use the package scripts in each of the packages to independently build and develope each package. The following scripts are useful for development of demos because they require building multiple packages in watch mode:

```sh
# Incrementally build the perf-bridge demo with its local dependencies.
node tools/cli/serve-demo/perf-bridge.mjs
```

```sh
# Incrementally build the perf-bridge demo with its local dependencies.
node tools/cli/serve-demo/load-file.mjs
```

# Build configuration

- All rust-wasm packages disable `wasm-opt` to workaround https://github.com/rustwasm/wasm-pack/issues/864
  ```
  [package.metadata.wasm-pack.profile.release]
  wasm-opt = false
  ```
- Vue packages use `'vite-plugin-wasm'` and `'vite-plugin-top-level-await'` to workaround [missing WAST-import feature in Vite](https://vitejs.dev/guide/features.html#webassembly).

  ```
  import wasm from "vite-plugin-wasm";
  import topLevelAwait from "vite-plugin-top-level-await";

  export default defineConfig({
    plugins: [
      wasm(),
      topLevelAwait()
    ]
  });
  ```

# Troubleshooting

- Vscode reports errors like `cannot find 'vue'`
  - To get typings to work correctly in Vue, you need to select the workspace Typescript, see [known incompatibility issue between Volar & Yarn 3](https://github.com/vuejs/language-tools/issues/918#issuecomment-1365225247)
- vscode does not update WASM types even though the package has been rebuilt
  - The problem is with Volar. Open command panel (ctrl+shift+p) and run `Volar: Restart Vue Server`
