import React from "react";
import ReactDOM from "react-dom";

import { Button } from "@package/lib";

ReactDOM.render(
  <>
    <div>hello world</div>
    <Button text="click me!" />
  </>,
  document.querySelector("#root")
);
