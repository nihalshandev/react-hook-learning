import React, { useReducer } from "react";

const initailState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increament":
      return state + 1;
    case "decreament":
      return state - 1;
    case "reset":
      return initailState;
    default:
      return state;
  }
};
const CounterThree = () => {
  const [count, dispatch] = useReducer(reducer, initailState);
  const [countTow, dispatchTow] = useReducer(reducer, initailState);
  return (
    <div>
      <h4>Count - {count}</h4>
      <button onClick={() => dispatch("increament")}>Increament</button>
      <button onClick={() => dispatch("decreament")}>Decreament</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <div>
        <h4>Count - {countTow}</h4>
        <button onClick={() => dispatchTow("increament")}>Increament</button>
        <button onClick={() => dispatchTow("decreament")}>Decreament</button>
        <button onClick={() => dispatchTow("reset")}>Reset</button>
      </div>
    </div>
  );
};

export default CounterThree;
