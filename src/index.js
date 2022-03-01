import React, {useState, useEffect} from "react"; //useState is a function, this is why i use { }
import ReactDOM from "react-dom";
import "./index.css";

export default function App() {
  const [data, setData] = useState([]);
  
  // removing the dependency array, useEffect called
  // the endpoint 732 times in a few seconds
  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then((response) => response.json())
      .then(setData);
    console.log("call API");
  }, []);

  if (data) {
    return (
      <div>
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
        <button onClick={() => setData([])}>Remove users</button>
      </div>
    );
  }
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)