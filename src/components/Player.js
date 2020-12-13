import React from "react";
import Card from "./Card";
import Score from "./Score";

import { StyledPlayer, StyledPlayerName } from "../styles/StyledPlayer";

function Player({ name, cards }) {
  return (
    <StyledPlayer>
      <StyledPlayerName>
        <div>{name}</div>
      </StyledPlayerName>
      {cards.map((card, x) => (
        <Card key={x} card={card} />
      ))}
      <Score />
    </StyledPlayer>
  );
}

export default Player;
