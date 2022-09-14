import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);
  console.log("number of rerenders");
  const handleClick = () => {
    setCount((prev) => prev + 1);
    setNumber(count + 1);
    new Promise((resolve: any) => {
      setTimeout(() => {
        setCount(count + 5);
        setNumber(count + 5);
        resolve();
      }, 1000);
    });
  };
  return (
    <div className="App">
      <p>{count}</p>
      <p>{number}</p>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

export default App;
