import React, { useState } from "react"; //useState is a function, this is why i use { }
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const [check, setCheck] = useState(false);
  return (
    <div>
      <input
        type="checkbox"
        value={check}
        onChange={() => {
          setCheck((check) => !check);
        }}
      />
      <p>{check ? "checked" : "no checked"}</p>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App name="jess" />
  </React.StrictMode>,
  document.getElementById("root")
);
