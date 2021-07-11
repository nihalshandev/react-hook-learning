import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increament":
      return {
        ...state,
        firstCounter: state.firstCounter + action.value,
      };
    case "decreament":
      return {
        ...state,
        firstCounter: state.firstCounter - action.value,
      };
    case "increament2":
      return {
        ...state,
        secondCounter: state.secondCounter + action.value,
      };
    case "decreament2":
      return {
        ...state,
        secondCounter: state.secondCounter - action.value,
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const CounterTow = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h4>First Counter - {count.firstCounter}</h4>
      <h4>Second Counter - {count.secondCounter}</h4>
      <button onClick={() => dispatch({ type: "increament", value: 1 })}>
        Increament
      </button>
      <button onClick={() => dispatch({ type: "decreament", value: 1 })}>
        Decreament
      </button>
      <button onClick={() => dispatch({ type: "increament", value: 5 })}>
        Increament 5
      </button>
      <button onClick={() => dispatch({ type: "decreament", value: 5 })}>
        Decreament 5
      </button>
      <div>----- Second Counter -----</div>
      <button onClick={() => dispatch({ type: "increament2", value: 1 })}>
        Increament Second Counter   
      </button>
      <button onClick={() => dispatch({ type: "decreament2", value: 1 })}>
        Decreament Second Counter
      </button>
      <div>------------------------</div>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default CounterTow;
