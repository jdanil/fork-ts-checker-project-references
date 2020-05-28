import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpackMerge from "webpack-merge";

import common from "./common.config";
import { packagePath } from "./utils";

export default webpackMerge.smart(common, {
  mode: "development",
  devServer: {
    contentBase: packagePath("build"),
    hot: true,
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        build: true,
        tsconfig: packagePath("tsconfig.json"),
      },
    }),
    new HtmlWebpackPlugin({
      title: "Playground",
      template: packagePath("./src/index.html"),
    }),
  ],
});
