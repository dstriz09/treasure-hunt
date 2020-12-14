import React from "react";
import Card from "./Card";
import Score from "./Score";

import { StyledPlayer, StyledPlayerData } from "../styles/StyledPlayer";

function Player({ name, cards }) {
  return (
    <StyledPlayer>
      <StyledPlayerData>
        <div>{name}</div>
        <div>
          <Score />
        </div>
      </StyledPlayerData>

      {cards.map((card, x) => (
        <Card key={x} card={card} />
      ))}
    </StyledPlayer>
  );
}

export default Player;
