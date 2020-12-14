import styled from "styled-components";

export const StyledValues = styled.div`
  text-align: center;
  padding: 10px;
  display: inline;
  color: white;
`;

export const StyledBonus = styled.div`
  position: absolute;
  display: inline;
  margin-left: 20px;
  border: solid 1px rgba(${(props) => props.color});
  width: 20px;
  height: 20px;
  color: white;
  border-radius: 25px;
  background-color: rgba(${(props) => props.color});
`;
