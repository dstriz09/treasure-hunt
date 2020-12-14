import React from "react";
import Shape from "./Shape";
import Button from "./Button";
import Status from "./Status";

import { StyledExpedition } from "../styles/StyledExpedition";

function Expedition({ round, expeditionNum }) {
  return (
    <StyledExpedition>
      <Shape />
      <Button />
      <Status round={round} expeditionNum={expeditionNum} />
    </StyledExpedition>
  );
}

export default Expedition;
