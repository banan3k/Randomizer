import React from "react";
import "./styles.css";

function Add({ setIsListVisible, isListVisible }: any) {
  const openList = () => {
    setIsListVisible(!isListVisible);
  };
  return (
    <div
      className={`add ${isListVisible ? "activeColor" : ""}`}
      onClick={openList}
    >
      {isListVisible ? "Close" : "Add"}
    </div>
  );
}

export default Add;
