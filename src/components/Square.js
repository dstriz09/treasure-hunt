import React from "react";

import { StyledSquare, StyledEmpty } from "../styles/StyledSquare";

function Square({ type }) {
  if (type) {
    return <StyledSquare type={type}> </StyledSquare>;
  } else return <StyledEmpty />;
}

export default Square;
