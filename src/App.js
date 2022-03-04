import { useContext } from "react";
import "./App.css";
import { HeadachesContext } from "./index";

function App() {
  //any component that is part of the app, because its
  //been wrapper in the provider, we can read the value of
  //headache context just calling useContext
  const { headaches } = useContext(HeadachesContext);
  console.log(headaches); // a object headaches (4 elements)
  return (
    <div>
      <h1>Types of headaches</h1>
      <ul>
        {headaches.map((headache) => (
          <li key={headache.id}>{headache.type}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
