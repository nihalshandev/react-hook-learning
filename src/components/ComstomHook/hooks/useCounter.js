import {useState} from "react";

const useCounter = (initialState = 0,  value) => {
  const [count, setCount] = useState(initialState);
  const increamentCount = () => {
    setCount((prevCount) => prevCount + value);
  };
  const decreamentCount = () => {
    setCount((prevCount) => prevCount - value);
  };
  const reset = () => {
    setCount(initialState);
  };

  return [
      count, increamentCount, decreamentCount, reset
  ]
};

export default useCounter;
