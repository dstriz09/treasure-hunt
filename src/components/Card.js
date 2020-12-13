import React from "react";
import Values from "./Values";
import Grid from "./Grid";
import Button from "./Button";

import { StyledCard } from "../styles/StyledCard";

function Card({ card }) {
  return (
    // For now, I'm manually passing in an RGB color.
    // This will eventually a prop value on each card.
    <StyledCard color={card.color}>
      <Values points={card.points} />
      <Grid grid={card.grid} />
      <Button />
    </StyledCard>
  );
}

export default Card;
