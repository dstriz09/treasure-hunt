import React from "react";
import { StyledValues, StyledBonus } from "../styles/StyledValues";

function Values({ points, bonus, bonusColor }) {
  return (
    <StyledValues>
      {points}
      {bonus ? <StyleBonus color={bonusColor}>{bonus}</StyleBonus> : ""}
  );
}

export default Values;
