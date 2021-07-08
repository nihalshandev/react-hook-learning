import React from "react";
import { useState } from "react/cjs/react.development";

const HookCounterTow = () => {
  const intialCount = 0;
  const [count, setCount] = useState(intialCount);

  const increamentFive = ()=> {
    for(let i = 0; i < 5; i++){
      setCount(prevCount => prevCount + 1)
    }
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <button onClick={() => setCount(count - 1)}>Decreament</button>
      <button onClick={() => setCount(intialCount)}>Reset</button>
      <button onClick={increamentFive}>Increament 5</button>
    </div>
  );
};

export default HookCounterTow;
