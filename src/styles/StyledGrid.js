import styled from "styled-components";

export const StyledGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 30px);
  grid-template-columns: repeat(4, 30px);
  grid-gap: 1px;
  border: 1px solid #333;
  max-width: 120px;
  padding: 5px;
`;
