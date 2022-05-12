import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import UseInputHook from "./useInput/UseInputHook";
import UseTabsHook from "./useTabs/UseTabsHook";
import UseTitleHook from "./useTitle/UseTitleHook";
import UseClickHook from "./useClick/UseClickHook";
import UseHoverHook from "./useHover/UseHoverHook";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UseInputHook />
    <UseTabsHook />
    <UseTitleHook />
    {/* <UseClickHook /> */}
    {/* <UseHoverHook /> */}
  </React.StrictMode>
);

reportWebVitals();
