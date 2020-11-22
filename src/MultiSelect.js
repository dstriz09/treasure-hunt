import React, { useState } from "react";
import Board from "./Board";
import Expedition from "./Expedition";

export default function MultiSelect({ onSubmit }) {
  const [option, setOption] = useState({ value: "3" });
  const [multiplayer, setMultiplayer] = useState("");

  const handleSubmit = (e, players) => {
    e.preventDefault();
    console.log(players == 2);
    if (players == 2) {
      console.log("dillin");
      setMultiplayer(
        <div>
          <Expedition />
          <br />
          <br />
          <h3>Player 1</h3>
          <Board />{" "}
          <span>
            <Board />
          </span>
          <h3>Player 2</h3>
          <Board />{" "}
          <span>
            <Board />
          </span>
        </div>
      );
    } else if (players == 3) {
      console.log("dillin");
      setMultiplayer(
        <div>
          <Expedition />
          <br />
          <br />
          <h3>Player 1</h3>
          <Board />{" "}
          <span>
            <Board />
          </span>
          <h3>Player 2</h3>
          <Board />{" "}
          <span>
            <Board />
          </span>
          <h3>Player 3</h3>
          <Board />{" "}
          <span>
            <Board />
          </span>
        </div>
      );
    } else if (players == 4) {
      console.log("dillin");
      setMultiplayer(
        <div>
          <Expedition />
          <br />
          <br />
          <h3>Player 1</h3>
          <Board />{" "}
          <span>
            <Board />
          </span>
          <h3>Player 2</h3>
          <Board />{" "}
          <span>
            <Board />
          </span>
          <h3>Player 3</h3>
          <Board />{" "}
          <span>
            <Board />
          </span>
          <h3>Player 4</h3>
          <Board />{" "}
          <span>
            <Board />
          </span>
        </div>
      );
    }
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
