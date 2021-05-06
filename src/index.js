import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Planets from "./Planets";
import Film from "./Film";
import People from "./People";

ReactDOM.render(
  <React.StrictMode>
    <Film />
    <Planets />
    <People />
  </React.StrictMode>,
  document.getElementById("root")
);
