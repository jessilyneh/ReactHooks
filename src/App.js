import "./App.css";
import { useHeadaches } from "./index";

function App() {
  const { headaches } = useHeadaches();
  //any component that is part of the app, because its
  //been wrapper in the provider, we can read the value of
  //headache context just calling useContext
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
