import React, { useState } from "react";

const Display = () => {
  const [displayState, setDisplayState] = useState(0);
  
  const disp = num => {
    setDisplayState(num);
  };

  return <div className="display"><p>{displayState}</p></div>;
};
export default Display;