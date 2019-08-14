import React from "react";

const OperatorButton = (props) => {
  const {oper} = props;
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {<button>{oper}</button>}
    </>
  );
};

export default OperatorButton