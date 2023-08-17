import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Stateprovider } from "./API/Stateprovider";
import { initialState, reducer } from "./API/reducer";

ReactDOM.render(
  <Stateprovider initialState={initialState} reducer={reducer}>
    <App />
  </Stateprovider>,
  document.getElementById("root")
);

