import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";

export const TreesContext = createContext();

const trees = [
  { id: "1", type: "migraines" },
  { id: "2", type: "digestive problem" },
  { id: "3", type: "sinus headaches" },
  { id: "4", type: "tension" }
];
export default function App() {
  return (
    <div>
      <h1>Types of headaches</h1>
    </div>
  );
}

ReactDOM.render(
  <TreesContext.Provider value={{ trees }}>
    <App />
  </TreesContext.Provider>,
  document.getElementById("root")
);
