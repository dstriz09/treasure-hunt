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
  margin-left: 35px;
  margin-top: -15px;
  border: solid 1px rgba(${(props) => props.color});
  line-height: 25px;
  width: 25px;
  height: 25px;
  color: white;
  border-radius: 50%;
  background-color: rgba(${(props) => props.color});
`;
