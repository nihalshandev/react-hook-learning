import { createContext } from "react";
import "./App.css";
import ComponentC from "./components/useContext/ComponentC";

export const UserContext = createContext();
export const ChannelContext = createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Nihal shan"}>
        <ChannelContext.Provider value={'Pattam tech'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
