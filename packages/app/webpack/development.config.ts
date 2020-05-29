import * as ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as webpackMerge from "webpack-merge";

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
