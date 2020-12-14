import React from "react";
import Expedition from "./Expedition";
import Draw from "./Draw";
import Player from "./Player";
import { TREASURES } from "../cards/treasureCards";

import { StyledBoard } from "../styles/StyledBoard";

function Board() {
  // Hard code for now
  const round = 1;
  const expeditionNum = 1;
  const name = ["Dillin", "Brandon"];

  return (
    <StyledBoard>
      <Expedition round={round} expeditionNum={expeditionNum} />
      <Draw cards={[TREASURES[0], TREASURES[1], TREASURES[2], TREASURES[3]]} />
      <Player name={name[0]} cards={[TREASURES[4], TREASURES[5]]} />
      <Player name={name[1]} cards={[TREASURES[6], TREASURES[7]]} />
    </StyledBoard>
  );
}

export default Board;
