import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import UseInputHook from "./useInput/UseInputHook";
import UseTabsHook from "./useTabs/UseTabsHook";
import UseTitleHook from "./useTitle/UseTitleHook";
import UseClickHook from "./useClick/UseClickHook";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UseInputHook />
    <UseTabsHook />
    <UseTitleHook />
    {/* <UseClickHook /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
