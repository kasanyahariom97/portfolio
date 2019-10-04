import React from "react";
import styled from "styled-components";
import { ReactContext } from "../Context";
import Button from "./StyledButton";
import { FiEye } from "react-icons/fi";

const Box = styled.div`
  height: 220px;
  margin: 1rem;
  @media (max-width: 780px) {
    height: 180px;
    margin: 1rem 0.5rem;
  }
  color: ${props => props.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 3px 5px ${props => props.bg};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .view-btn {
    transition: all 0.2s;
    position: absolute;
    background: ${props => props.bg};
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: none;
    font-weight: bold;
    top: 0;
  }

  &:hover {
    .view-btn {
      display: flex;
    }
  }
`;

const Project = props => {
  const myContext = React.useContext(ReactContext);
  return (
    <Box bg={myContext.mode.backColorTrans} color={myContext.mode.fontColor}>
      <div className="view-btn">
        <div>{props.title}</div>
        <Button
          color={myContext.mode.primaryColor}
          hvColor={myContext.mode.backColor}
        >
          <a href={props.url}>
            View&nbsp;
            <FiEye />
          </a>
        </Button>
      </div>
      <img src={props.img} alt="noe" />
    </Box>
  );
};

export default Project;
