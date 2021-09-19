import "./styles.css";
import React, { useState } from "react";

var cricketerDictionary = {
  Batsmen: [
    { name: "Virat Kohli", ranking: "1" },
    { name: "MS Dhoni", ranking: "2" },
    { name: "Rohit Sharma", ranking: "3" }
  ],
  Bowlers: [
    { name: "Jasprit Bumrah", ranking: "1" },
    { name: "Kagiso Rabada", ranking: "2" },
    { name: "Pat Cummins", ranking: "3" }
  ],
  "All-Rounders": [
    { name: "Ben Stokes", ranking: "1" },
    { name: "Ravindra Jadeja", ranking: "2" },
    { name: "Hardik Pandya", ranking: "3" }
  ]
};
export default function App() {
  var [category, setCategory] = useState("Batsmen");
  function onClickHandler(category) {
    setCategory(category);
  }
  return (
    <div className="App">
      <h1>🏏 Best Cricketers</h1>
      <small>
        Checkout my favorite cricketers. Select a category to see the best.
      </small>

      <div>
        {Object.keys(cricketerDictionary).map((category) => {
          return (
            <button key={category} onClick={() => onClickHandler(category)}>
              {category}
            </button>
          );
        })}
      </div>
      <hr></hr>
      <div>
        <ul>
          {cricketerDictionary[category].map((cricketer) => (
            <li key={cricketer.name}>
              {" "}
              <div id="li-div"> {cricketer.name} </div>
              <div id="li-div-rank"> {cricketer.ranking} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
