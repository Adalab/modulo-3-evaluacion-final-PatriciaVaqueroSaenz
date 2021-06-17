import React from "react";

const Reset = (props) => {
  const handleReset = () => {
    props.handleReset();
  };
  return (
    <div className="container__resetButton">
      <button className="resetButton" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Reset;
