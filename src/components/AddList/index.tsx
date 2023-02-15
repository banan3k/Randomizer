import React, { useState } from "react";
import "./styles.css";

function AddList({ isListVisible, addToList }: any) {
  const [inputValue, setInputValue] = useState("");

  const changedInput = (e: any) => {
    setInputValue(e.target.value);
  };
  const sendToList = () => {
    addToList(inputValue);
    setInputValue("");
  };
  return (
    <div className="addList">
      <input className="textInput" onChange={changedInput} value={inputValue} />
      <button className="textButton" onClick={sendToList}>
        +
      </button>
    </div>
  );
}

export default AddList;
