import React, {useState} from "react"; //useState is a function, this is why i use { }
import ReactDOM from "react-dom";
import "./index.css";
import {FaStar} from "react-icons/fa"

const createArray = (length) => [
  ...Array(length)];

function Star({selected = false, onSelect}) {
  return (
    <FaStar
    color={selected ? "yellow" : "gray"}
    onClick={onSelect}
    />
  )
}

function StarRating({totalStars = 5}) { //default value, in case totalStars hasnt a value defined in return
  const [selectedStars, setSelectedStars] = useState(0)

  return (
    <>
    {
      createArray(totalStars).map((_n,i) => (
        <Star 
          key={i}
          selected={selectedStars > i} 
          onSelect={()=> setSelectedStars(i + 1)}
        />
        )
      )
    }
    <p>{selectedStars} of {totalStars}</p>
    </>
  )
}

function App() {

  return <StarRating totalStars={10}/>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)