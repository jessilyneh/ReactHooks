import React, { createContext, useContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const HeadachesContext = createContext();
//refactoring in a custom component to reuse
export const useHeadaches = () => useContext(HeadachesContext);

const headaches = [
  { id: "1", type: "migraines" },
  { id: "2", type: "digestive problem" },
  { id: "3", type: "sinus headaches" },
  { id: "4", type: "tension" }
];

// Pass data down to the child components
ReactDOM.render(
  <HeadachesContext.Provider value={{ headaches }}>
    <App />
  </HeadachesContext.Provider>,
  document.getElementById("root")
);
