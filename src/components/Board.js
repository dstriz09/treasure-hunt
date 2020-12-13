import React from "react";
import Expedition from "./Expedition";
import Draw from "./Draw";
import Player from "./Player";

import { StyledBoard } from "../styles/StyledBoard";

function Board() {
  // Hard code for now
  const round = 1;
  const expeditionNum = 1;
  const name = ["Dillin", "Brandon"];
  const TREASURES = [
    {
      color: "253, 213, 137",
      points: 14,
      grid: [
        [3, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 0],
      ],
      bonus: null,
    },
  ];

  return (
    <StyledBoard>
      <Expedition round={round} expeditionNum={expeditionNum} />
      <Draw cards={[TREASURES[0], TREASURES[0], TREASURES[0], TREASURES[0]]} />
      <Player name={name[0]} cards={[TREASURES[0], TREASURES[0]]} />
      <Player name={name[1]} cards={[TREASURES[0], TREASURES[0]]} />
    </StyledBoard>
  );
}

export default Board;
