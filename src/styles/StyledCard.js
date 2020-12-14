import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: rgba(${(props) => props.color});
  margin: 10px;
  padding: 10px;
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  display: flex;
  flex-direction: column;
  min-width: 142px;
  max-width: 142px;
  height: 219px;
`;
