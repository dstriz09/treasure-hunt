import React from "react";
import Card from "./Card";
import Score from "./Score";

import { StyledPlayer, StyledPlayerName } from "../styles/StyledPlayer";

function Player({ name, cards }) {
  return (
    <StyledPlayer>
      <StyledPlayerName>{name}</StyledPlayerName>
      <Score />
      {cards.map((card, x) => (
        <Card key={x} card={card} />
      ))}
    </StyledPlayer>
  );
}

export default Player;
