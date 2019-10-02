import styled from "styled-components";
import Colors from "../constants/Colors";

const Button = styled.div`
  margin: 1.2rem 0;
  a {
    transition: 0.2s all;
    padding: 5px 12px;
    border-radius: 5px;
    letter-spacing: 5px;
    font-weight: bolder;
    text-transform: uppercase;
    font-size: 12px;
    color: ${Colors.primaryColor};
    background: transparent;
    text-decoration: none;
    border: 2px solid ${Colors.primaryColor};

    &:hover {
      background-color: ${Colors.primaryColor};
      color: ${Colors.backColor};
    }
  }
`;

export default Button;
