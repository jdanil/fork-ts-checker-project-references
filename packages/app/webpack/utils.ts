import path from "path";

export const packagePath = (relativePath: string): string =>
  path.resolve(__dirname, "../", relativePath);

export const rootPath = (relativePath: string): string =>
  path.resolve(__dirname, "../../../", relativePath);
