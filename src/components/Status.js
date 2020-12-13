import React from "react";

import { StyledStatus, StyledDisplay } from "../styles/StyledStatus";

function Status({ round, expeditionNum }) {
  return (
    <StyledStatus>
      <StyledDisplay>{`Round: ${round}/4`}</StyledDisplay>
      <StyledDisplay>{`Expedition: ${expeditionNum}/7`}</StyledDisplay>
    </StyledStatus>
  );
}

export default Status;
