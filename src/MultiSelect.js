import React, { useState } from "react";
import Board from "./Board";
import Expedition from "./Expedition";

export default function MultiSelect({ onSubmit }) {
  const [option, setOption] = useState({ value: "2" });
  const [multiplayer, setMultiplayer] = useState("");
  let onePlayer = [
    <div style={{ display: "flex" }}>
      <h3 style={({ margin: "20px" }, { alignSelf: "center" })}>Player</h3>
      <Board />
      <Board />
    </div>,
  ];

  const handleSubmit = (e, players) => {
    e.preventDefault();
    let newArray = [];
    let i = 0;
    while (i < players) {
      newArray = [...newArray, onePlayer];
      i++;
    }
    setMultiplayer(newArray);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e, option.value)}>
        <label>
          How many players?
          <select
            value={option.value}
            onChange={(e) => {
              setOption({ value: `${e.target.value}` });
            }}
          >
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
      {multiplayer}
    </div>
  );
}
