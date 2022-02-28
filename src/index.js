import React, { useState } from "react"; //useState is a function, this is why i use { }
import ReactDOM from "react-dom";
import "./index.css";
import {FaStar} from "react-icons/fa"

const createArray = (length) => [
  ...Array(length)]
function Star({selected = false}) {
  return <FaStar color={selected ? "yellow" : "gray"}/>
}

function StarRating(totalStars = 5) { //default value, in case totalStars hasnt a value defined in return
  return createArray(totalStars).map((n,i) => (<Star key={i} />))
}
function App() {

  return <StarRating totalStars={10}/>
}

ReactDOM.render(
  <React.StrictMode>
    <App name="jess" />
  </React.StrictMode>,
  document.getElementById("root")
);
