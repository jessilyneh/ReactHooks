import './App.css';

// array destructuring

//access third element using destructuring
/* const [,,third] = ["jess","sapato","pé"]
console.log(third) // pé */

// access first element by position using destructuring
/* const [first] = ["jess","sapato","pé"]
console.log(first) //jess */

//access by position
/* const names = ["jess","sapato","pé"]
console.log(names[0]) //jess */

// object destructuring

// using destructuring props
function App({name}) {
  return (
    <div className="App">
      <h1>Hello,{name}</h1>
    </div>
  );
}

// using props
/* function App(props) {
  return (
    <div className="App">
      <h1>Hello,{props.name}</h1>
    </div>
  );
} */

export default App;
