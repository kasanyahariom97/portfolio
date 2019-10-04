import styled from "styled-components";

const Button = styled.div`
  margin: 1.2rem 0;
  a, button {
    transition: 0.2s all;
    padding: 5px 12px;
    border-radius: 5px;
    letter-spacing: 5px;
    font-weight: bolder;
    text-transform: uppercase;
    font-size: 12px;
    color: ${props => props.color};
    background: transparent;
    text-decoration: none;
    border: 2px solid ${props => props.color};

    &:hover {
      background-color: ${props => props.color};
      color: ${props => props.hvColor};
    }
  }
`;

export default Button;
