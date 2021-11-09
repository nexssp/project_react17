import React from "react";
import ReactDOM from "react-dom";

// import "./chart.sass";

import App from "./components/App";

ReactDOM.render(
  <App test={`this is @nexssp/project ${React.version} template`} />,
  document.getElementById("app")
);
