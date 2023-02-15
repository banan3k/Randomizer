import React from "react";
import "./styles.css";

function SaveAndLoad({
  listToSave,
  setRandomList1,
  setRandomList2,
  setRandomList3,
}: any) {
  const saveToCookie = () => {
    listToSave.forEach((list: any, index: number) => {
      localStorage.setItem(`list${index}`, `${list.join("~~")}`);
    });
  };
  const loadFromCookie = () => {
    const list0 = localStorage.getItem("list0");
    const list1 = localStorage.getItem("list1");
    const list2 = localStorage.getItem("list2");

    setRandomList1(list0?.split("~~"));
    setRandomList2(list1?.split("~~"));
    setRandomList3(list2?.split("~~"));
  };
  return (
    <>
      <div className="save" onClick={saveToCookie}>
        Save
      </div>
      <div className="save" onClick={loadFromCookie}>
        Load
      </div>
    </>
  );
}

export default SaveAndLoad;
