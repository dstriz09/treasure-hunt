import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: rgba(${(props) => props.color});
  margin: 10px;
  padding: 10px;
  border-style: solid;
  border-width: 1px;
`;
