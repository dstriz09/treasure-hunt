import React from "react";

import { StyledSquare } from "../styles/StyledSquare";

function Square({ type }) {
  console.log(type);
  return <StyledSquare>{type}</StyledSquare>;
}

export default Square;
