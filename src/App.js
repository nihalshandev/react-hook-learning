import { createContext, useReducer } from "react";
import "./App.css";
import ComponentA from "./components/useReducer_useContext/ComponentA";
import ComponentC from "./components/useReducer_useContext/ComponentC";
import ComponentB from "./components/useReducer_useContext/ComponentD";

export const CountContext = createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increament":
      return state + 1;
    case "decreament":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h5>Count - {count}</h5>
      <CountContext.Provider
        value={{
          countState: count,
          countDispatch: dispatch,
        }}
      >
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
    </div>
  );
}

export default App;
