import React, {useRef} from "react";
import ReactDOM from "react-dom";
import "./index.css";

export default function App() {
  const sound = useRef();
  const date = useRef();

  const submit = (e) => {
    e.preventDefault();
    const soundValue = sound.current.value;
    const dateValue = date.current.value;
    alert(`${soundValue} born in ${dateValue}`);
    sound.current.value = "";
    date.current.value = "";
  };

  return (
    <form onSubmit={submit}>
      <input ref={sound} type="text" placeholder="name..." />

      <input ref={date} type="date" />

      <button>Submit</button>
    </form>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)