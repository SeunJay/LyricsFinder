import React, { Fragment } from "react";
import spinner from "./spinner.gif";

export default () => (
  <Fragment>
    <img
      src={spinner}
      alt="Loading"
      style={{ width: "200px", margin: "5px auto", display: "block" }}
    />
  </Fragment>
);
