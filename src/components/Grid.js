import React from "react";
import Square from "./Square";

import { StyledGrid } from "../styles/StyledGrid";

function Grid({ grid }) {
  return (
    <div>
      <StyledGrid>
        {grid.map((row) => row.map((cell, x) => <Square key={x} type={cell} />))}
      </StyledGrid>
    </div>
  );
}

export default Grid;
