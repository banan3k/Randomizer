import React, { useState } from "react";
import "./styles.css";

function AddedList({ list, removeFromList }: any) {
  const removeItem = (index: number) => () => {
    removeFromList(index);
  };
  return (
    <ul className="addedList">
      {list.map((el: string, index: number) => (
        <li className="addListItem" key={el}>
          {el}{" "}
          <span className="removeItemFromAdded" onClick={removeItem(index)}>
            [Remove]
          </span>
        </li>
      ))}
    </ul>
  );
}

export default AddedList;
