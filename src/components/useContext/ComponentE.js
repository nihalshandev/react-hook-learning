import React, { useContext } from "react";
import { ChannelContext, UserContext } from "../../App";
import ComponentF from "./ComponentF";

const ComponentE = () => {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
  return (
    <div>
        <h4> {user} - {channel} </h4>

        <p>------------------------------</p>
      <ComponentF />
    </div>
  );
};

export default ComponentE;
