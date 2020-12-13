import React from "react";
import Card from "./Card";

import { StyledDraw } from "../styles/StyledDraw";

function Draw({ cards }) {
  return (
    <StyledDraw>
      {cards.map((card, x) => (
        <Card key={x} card={card} />
      ))}
    </StyledDraw>
  );
}

export default Draw;
