import React, { useContext, useState } from "react";
import Players from "./Players";
import Expedition from "./Expedition";

import { CardContext } from "./CardContext";


export default function MultiSelect({ onSubmit }) {
  const [option, setOption] = useState({ value: "2" });
  const [playersArr, setPlayersArr] = useState([]);
  const [state, setState] = useContext(CardContext);

  const handleSubmit = (e, players) => {
    e.preventDefault();

    let temp = []
    for (let i = 0; i < players; i++) {
      temp.push(<Players playerid={i} key={i}/>)
    }
    setPlayersArr(temp);

    // Update current board number to be the num of players times two
    setState(state => ({ ...state, currentTreasure: players * 2 }));
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
      {
        playersArr.map((player) => {
          return player;
        })
      }
    </div>
  );
}
