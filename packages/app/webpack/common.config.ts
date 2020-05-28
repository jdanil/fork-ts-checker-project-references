import { packagePath, rootPath } from "./utils";

const developmentMode = process.env.NODE_ENV !== "production";

export default {
  entry: packagePath("src/index.tsx"),
  output: {
    path: packagePath("build"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".mjs", ".js", ".jsx"],
    modules: [rootPath("node_modules"), packagePath("node_modules")],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/u,
        exclude: [/node_modules/u, packagePath("out")],
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: packagePath("tsconfig.json"),
              experimentalWatchApi: developmentMode,
              projectReferences: true,
              transpileOnly: developmentMode,
            },
          },
        ],
      },
    ],
  },
};
