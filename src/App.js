import "./styles.css";
import React, { useState } from "react";

var cricketerDictionary = {
  Batsmen: [
    { name: "Virat Kohli", ranking: "1", desc: "the run machine" },
    { name: "MS Dhoni", ranking: "2", desc: "captain cool" },
    { name: "Rohit Sharma", ranking: "3", desc: "hitman" }
  ],
  Bowlers: [
    { name: "Jasprit Bumrah", ranking: "1", desc: "yorker king" },
    { name: "Kagiso Rabada", ranking: "2", desc: "speed star" },
    { name: "Pat Cummins", ranking: "3", desc: "all seasoned player" }
  ],
  "All-Rounders": [
    { name: "Ben Stokes", ranking: "1", desc: "the all rounder" },
    { name: "Ravindra Jadeja", ranking: "2", desc: "sir jadeja" },
    { name: "Hardik Pandya", ranking: "3", desc: " the rockstar" }
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
              <div id="li-div-desc"> {cricketer.desc} </div>
              <div id="li-div-rank"> {cricketer.ranking} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
