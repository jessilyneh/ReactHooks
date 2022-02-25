import React, {useState} from 'react'; //useState is a function, this is why i use { }
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  //state function
const [status, setStatus] = useState("open");//a function to change the state

//state variable
/* const [status] = useState("open") //the current state
console.log(status) // open */

//what is useState?
/* const result = useState;
console.log(result) // a array with 2 itens - 0:undefined 1:()=> - a fuction */
  return (
      <>
      <h1>the door is:{status}</h1>
      <button onClick={()=> setStatus("close")}>Close</button>
      </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App name="jess"/>
  </React.StrictMode>,
  document.getElementById('root')
);

