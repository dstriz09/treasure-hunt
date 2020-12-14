import React from "react";
import { StyledValues, StyledBonus } from "../styles/StyledValues";

function Values({ points, bonus, bonusColor }) {
  return (
    <StyledValues>
      {points}
      <StyledBonus color={bonusColor}>{bonus}</StyledBonus>
    </StyledValues>
  );
}

export default Values;
