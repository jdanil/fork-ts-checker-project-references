import webpackMerge from "webpack-merge";

import common from "./common.config";

export default webpackMerge.smart(common, {
  mode: "production",
  bail: true,
});
