import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { useInput } from "./useInput";

// useInput will received a value (nameProps)
// and atribute the initial value (resetName)
export default function App() {
  const [nameProps, resetName] = useInput("");
  const [birthProps, resetBirth] = useInput("");

  const submit = (e) => {
    e.preventDefault();
    alert(`${nameProps.value} was born in ${birthProps.value}`);
    resetBirth();
    resetName();
  };

  // just need pass nameProps to value ({value,
  // onChange}, resetValue) inside {...nameProps}

  return (
    <form onSubmit={submit}>
      <input {...nameProps} type="text" placeholder="name..." />

      <input {...birthProps} type="date" />

      <button>Submit</button>
    </form>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
