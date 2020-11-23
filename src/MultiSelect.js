import React, { useState } from "react";
import Board from "./Board";
import Expedition from "./Expedition";

export default function MultiSelect({ onSubmit }) {
  const [option, setOption] = useState({ value: "2" });
  const [multiplayer, setMultiplayer] = useState("");

  const handleSubmit = (e, players) => {
    e.preventDefault();
    let newArray = [];
    let boardId = 10;
    for (let i = 0; i < players; i++) {
      newArray.push([
        <div style={{ display: "flex" }}>
          <h3 style={({ margin: "20px" }, { alignSelf: "center" })}>
            Player {i + 1}
          </h3>
          <Board playerId={i} boardId={++boardId} />
          <Board playerId={i} boardId={++boardId} />
        </div>,
      ]);
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
      <Expedition />
      {multiplayer}
    </div>
  );
}
