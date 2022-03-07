import "./App.css";
import { useHeadaches } from "./index";

function App() {
  const { headaches } = useHeadaches();
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
