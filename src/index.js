import React, {useReducer} from "react";
import ReactDOM from "react-dom";
import "./index.css";

export default function App() {
  //first argument: what we want to do if setNumber has called?
  // 0: the initial state
  const [number, setNumber] = useReducer(
    (number, newNumber) => number + newNumber,
    0
  );

  return <h1 onClick={()=> setNumber(1)}>{number}</h1>;
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)