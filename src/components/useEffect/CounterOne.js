import React, { useEffect, useState } from "react";

const CounterOne = () => {
  const [count, setCount] = useState(0);

    useEffect(()=> {
        document.title = `You clicked ${count} times`
    })

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click {count}</button>
    </div>
  );
};

export default CounterOne;
