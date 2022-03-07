import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { useFetch } from "./useFetch";

function App({ login }) {
  const { loading, error, data } = useFetch(
    `https://api.github.com/users/${login}`
  );

  if (loading) return <h1>error</h1>;
  if (error) return <pre>{JSON.stringfy(error, null, 2)}</pre>;
  return (
    <div>
      <img src={data.avatar_url} alt={data.login} />
      <h1>{data.login}</h1>
      {data.name && <p>{data.name}</p>}
      {data.location && <p>{data.location}</p>}
    </div>
  );
}

ReactDOM.render(<App login="Jeefelix" />, document.getElementById("root"));
