import { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {

  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function sayHello() {
    alert("Hello! Static Message");
  }

  function increase() {
    increment();
    sayHello();
  }

  function sayWelcome(message) {
    alert(message);
  }

  function handleClick() {
    alert("I was clicked");
  }

  return (
    <div style={{ padding: "20px" }}>

      <h1>React Event Examples</h1>

      <h2>Counter : {count}</h2>

      <button onClick={increase}>Increment</button>

      <button
        onClick={decrement}
        style={{ marginLeft: "10px" }}
      >
        Decrement
      </button>

      <br /><br />

      <button onClick={() => sayWelcome("Welcome")}>
        Say Welcome
      </button>

      <br /><br />

      <button onClick={handleClick}>
        OnPress
      </button>

      <hr />

      <CurrencyConvertor />

    </div>
  );
}

export default App;