import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Stateprovider } from "./API/Stateprovider";
import { initialState, reducer } from "./API/reducer";

ReactDOM.render(
  <Stateprovider initialState={initialState} reducer={reducer}>
    <App />
  </Stateprovider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
