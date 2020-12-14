import React from "react";
import Square from "./Square";

import { StyledGrid } from "../styles/StyledGrid";

function Grid({ grid }) {
  return (
    <div>
      <StyledGrid>
        {grid[0].map((row, x) => (
          <Square key={x} type={row} />
        ))}
      </StyledGrid>
      <StyledGrid>
        {grid[1].map((row, x) => (
          <Square key={x} type={row} />
        ))}
      </StyledGrid>
      <StyledGrid>
        {grid[2].map((row, x) => (
          <Square key={x} type={row} />
        ))}
      </StyledGrid>
      <StyledGrid>
        {grid[3].map((row, x) => (
          <Square key={x} type={row} />
        ))}
      </StyledGrid>
    </div>
  );
}

export default Grid;
