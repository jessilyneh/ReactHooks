import React, {useState, useEffect} from "react"; //useState is a function, this is why i use { }
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const [name, setName] = useState("Jess")
  const [role, setRole] = useState(false)

  // runs after every update and render. Promote side effect
  useEffect(() => {
    document.title = `celebrate ${name}`
    console.log(`celebrate ${name}`)
  },[name]);//dependency array will change the behavior everytime "name" was change

  useEffect(()=> {
    console.log(`this person is:${role ? "javascript developer": "student"}`)
  },[role]);//everytime the console.log changes is because role changes
  return(
    <section>
      <p>Congratulations, {name}!</p>
      <button
       onClick={()=> setName("Rafael")}
       >
        Change winner
      </button>
      <p>{role ? "you are a developer" : "you are a student"}</p>
      <button onClick={()=> setRole(true)}>become a <br/> professional developer <br/> in 18 weeks</button>
    </section>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)