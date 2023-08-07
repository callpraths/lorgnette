import * as fs from "fs";
import path from "path";

export function rootDir() {
  const thisdir = path.dirname(import.meta.url.replace("file:///", ""));
  return path.resolve(thisdir, "..", "..");
}

export function typescriptPackageDir(name) {
  return path.resolve(rootDir(), "packages", name);
}

export function rustPackageDir(name) {
  return path.resolve(rootDir(), "rs", name);
}

export function demoPackageDir(name) {
  return path.resolve(rootDir(), "demos", name);
}

export function getRustPackages() {
  return listDirectories(path.resolve(rootDir(), "rs"));
}

export function getTypescriptPackages() {
  return listDirectories(path.resolve(rootDir(), "packages"));
}

export function getDemoPacakges() {
  return listDirectories(path.resolve(rootDir(), "demos"));
}

function listDirectories(root) {
  const entries = fs.readdirSync(root, {
    withFileTypes: true,
  });
  return entries
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .map((name) => path.resolve(root, name));
}
