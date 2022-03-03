import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./index.css";

export default function App() {
  const [name, setName] = useState("")
  const [birth, setBirth]= useState("")

  //controlled components are those in which
  // form data is handled by the component's state
  const submit = (e) => {
    e.preventDefault();
    alert(`${name} was born in ${birth}`);
    setName("")
    setBirth("")
  };

  return (
    <form onSubmit={submit}>
      <input value={name} 
      type="text" 
      placeholder="name..." 
      onChange={(e)=> setName(e.target.value)}
      />

      <input value={birth}
       type="date"
       onChange={(e)=> setBirth(e.target.value)}
        />

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