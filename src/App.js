import "./App.css";
import CounterOne from './components/useReducer/CounterOne'
import CounterThree from "./components/useReducer/CounterThree";
import CounterTow from "./components/useReducer/CounterTow";

function App() {
  return (
    <div className="App">
      {/* <CounterOne /> */}
      {/* <CounterTow/> */}
      <CounterThree/>
    </div>
  );
}

export default App;
