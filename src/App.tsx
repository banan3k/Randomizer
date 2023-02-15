import React, { useState } from "react";
import "./App.css";
import Add from "./components/Add";
import Start from "./components/Start";
import AddList from "./components/AddList";
import AddedList from "./components/AddedList";
import SaveAndLoad from "./components/Save";

function App() {
  const [isListVisible, setIsListVisible] = useState(false);
  const [isRandomStarted, setIsRandomStarted] = useState(false);
  const [isRandomStartedContinue, setIsRandomStartedContinue] = useState(false);
  const [chosenItems, setChosenItems] = useState<string[]>(["1", "2", "3"]);

  const [randomList1, setRandomList1] = useState<string[]>([]);
  const [randomList2, setRandomList2] = useState<string[]>([]);
  const [randomList3, setRandomList3] = useState<string[]>([]);
  const addToList1 = (entry: string) => {
    setRandomList1([...randomList1, entry]);
  };

  const addToList2 = (entry: string) => {
    setRandomList2([...randomList2, entry]);
  };

  const addToList3 = (entry: string) => {
    setRandomList3([...randomList3, entry]);
  };

  const startRandomization = () => {
    setIsRandomStartedContinue(true);
    setIsRandomStarted(false);

    setIsListVisible(false);
    const item1 = randomList1[Math.floor(Math.random() * randomList1.length)];
    const item2 = randomList2[Math.floor(Math.random() * randomList2.length)];
    const item3 = randomList3[Math.floor(Math.random() * randomList3.length)];

    setTimeout(() => {
      setChosenItems([item1, item2, item3]);
    }, 500);

    setTimeout(() => {
      setIsRandomStarted(true);
      setIsRandomStartedContinue(false);
    }, 1000);
  };

  const removeFromList1 = (index: number) => {
    const newList = randomList1.filter((el: string, i: number) => i !== index);
    setRandomList1(newList);
  };
  const removeFromList2 = (index: number) => {
    const newList = randomList2.filter((el: string, i: number) => i !== index);
    setRandomList2(newList);
  };
  const removeFromList3 = (index: number) => {
    const newList = randomList3.filter((el: string, i: number) => i !== index);
    setRandomList3(newList);
  };

  return (
    <>
      <div className="saveAndLoad">
        <SaveAndLoad
          listToSave={[randomList1, randomList2, randomList3]}
          setRandomList1={setRandomList1}
          setRandomList2={setRandomList2}
          setRandomList3={setRandomList3}
        />
      </div>
      <div
        className={`App ${
          isListVisible || isRandomStarted || isRandomStartedContinue
            ? "smallMargin"
            : ""
        }`}
      >
        <Start startRandom={startRandomization} isListVisible={isListVisible} />
        <Add
          setIsListVisible={setIsListVisible}
          isListVisible={isListVisible}
        />
      </div>
      {isListVisible && (
        <div className="addingList">
          <div className="list list1">
            <AddList isListVisible={isListVisible} addToList={addToList1} />
            <AddedList list={randomList1} removeFromList={removeFromList1} />
          </div>
          <div className="list list2">
            <AddList isListVisible={isListVisible} addToList={addToList2} />
            <AddedList list={randomList2} removeFromList={removeFromList2} />
          </div>
          <div className="list list3">
            <AddList isListVisible={isListVisible} addToList={addToList3} />
            <AddedList list={randomList3} removeFromList={removeFromList3} />
          </div>
        </div>
      )}
      {true && (
        <div className="randomizedItems">
          {chosenItems.map((el: string, index: number) => (
            <div
              className={`item ${
                isRandomStarted ? "visible" : "notVisible"
              } item${index}`}
            >
              {el?.includes("http") ? (
                <img className="imgItem" src={el} />
              ) : (
                <span className="textItem">{el}</span>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
