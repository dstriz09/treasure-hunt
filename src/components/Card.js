import React from "react";
import Values from "./Values";
import Grid from "./Grid";
import Button from "./Button";

import { StyledCard } from "../styles/StyledCard";

function Card() {
  return (
    // For now, I'm manually passing in an RGB color.
    // This will eventually a prop value on each card.
    <StyledCard color={"253, 213, 137"}>
      <Values />
      <Grid />
      <Button />
    </StyledCard>
  );
}

export default Card;
