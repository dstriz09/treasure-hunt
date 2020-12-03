import React from "react";
import Expedition from "./Expedition";

export default function GameRoom({ handleNewGame, playersArr }) {
  return (
    <div>
      <button onClick={() => handleNewGame()}>Start new game</button>
      <Expedition />
      {playersArr.map((player) => {
        return player;
      })}
    </div>
  );
}
