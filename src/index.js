import React, {useReducer} from "react";
import ReactDOM from "react-dom";
import "./index.css";

const initialState = {
  message: "hello"
};

// send actions
function reducer(state, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "yell":
      return {
        message: `HEY, my default message was ${state.message}`
      };
    case "yup":
      return {
        message: `YO, this is my default msg: ${state.message}`
      };
  }
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Message:{state.message}</p>
      <button onClick={() => dispatch({ type: "yell" })}>yell</button>
      <button onClick={() => dispatch({ type: "yup" })}>yup</button>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)