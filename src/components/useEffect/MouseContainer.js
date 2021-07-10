import React, { useState } from "react";
import HookMouse from "./HookMouse";

const MouseContainer = () => {
  const [display, setDesplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDesplay(!display)}>Toggle display</button>
      {display && <HookMouse />}
    </div>
  );
};

export default MouseContainer;
