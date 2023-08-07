import child_process from "child_process";
import { blue, red } from "./log.mjs";

export function simpleExec(command, options = {}) {
  child_process.execSync(command, { ...options, stdio: "inherit" });
}

export function simpleExecAsync(tag, command, options = {}) {
  return new Promise((resolve, reject) => {
    const stdoutTag = blue(`${tag}::stdout`);
    const stdderrTag = red(`${tag}::stderr`);
    const p = child_process.exec(command, { ...options, stdio: "pipe" });
    p.on("error", (err) => {
      reject(err);
    });
    p.stdout.on("data", (data) => {
      process.stdout.write(`${stdoutTag} ${data}`);
    });
    p.stderr.on("data", (data) => {
      process.stderr.write(`${stdderrTag} ${data}`);
    });
    p.on("exit", (code) => {
      if (code !== 0) {
        reject(`Subprocess ${tag} exited with code ${code}`);
      }
      console.log(blue(`Subprocess ${tag} exited successfully`));
    });
    p.on("close", () => {
      resolve();
    });
  });
}
