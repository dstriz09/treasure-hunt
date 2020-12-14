import styled from "styled-components";
import coin from "../cards/images/coin.jpg";
import tree from "../cards/images/tree.png";
import x from "../cards/images/x.jpg";

export const StyledSquare = styled.button`
  text-align: center;
  margin: 0;
  padding: 0;
  height: 30px;
  width: 30px;
  background-image: ${(props) => {
    const type = props.type;
    if (type === 2) {
      return `url(${coin})`;
    } else if (type === 3) {
      return `url(${tree})`;
    } else if (type === 4) {
      return `url(${x})`;
    }
  }};
  background-size: 70%;
  background-position: center;
  border: 1px solid #333;
  background-repeat: no-repeat;
`;

export const StyledEmpty = styled.div`
  text-align: center;
  margin: 0;
  padding: 0;
  height: 30px;
  width: 30px;
`;
