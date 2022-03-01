import React, {useState, useEffect} from "react"; //useState is a function, this is why i use { }
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const [name, setName] = useState("Jess")

  // runs after every update and render. Promote side effect
  useEffect(() => {
    document.title = `celebrate ${name}`
  });

  return(
    <section>
      <p>Congratulations, {name}!</p>
      <button onClick={()=> setName("Rafael")}>Change winner</button>
    </section>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)