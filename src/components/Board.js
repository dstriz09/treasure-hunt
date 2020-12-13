import React from "react";
import Expedition from "./Expedition";
import Draw from "./Draw";
import Player from "./Player";
import Status from "./Status";

function Board() {
  return (
    <div>
      <Expedition />
      <Draw />
      <Player />
      <Status />
    </div>
  );
}

export default Board;
