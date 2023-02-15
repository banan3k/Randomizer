import React from "react";
import "./styles.css";

function Start({ startRandom, isListVisible }: any) {
  return (
    <div
      className={`start ${!isListVisible ? "notActiveColor" : ""}`}
      onClick={startRandom}
    >
      Start
    </div>
  );
}

export default Start;
