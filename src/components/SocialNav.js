import React from "react";
import styled from "styled-components";
import { FaInstagram, FaReddit, FaGithub } from "react-icons/fa";
import { ReactContext } from '../Context';
import MyAccounts from '../constants/Accounts';

const ConDiv = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 23;
  a {
    transition: all 0.2s;
    margin: 0 5px;
    padding: 7px 9px;
    font-size: 13px;
    border: 1.5px solid ${props => props.border};
    border-radius: 3px;
    display: inline-block;
    text-decoration: none;
    color: ${props => props.color};
    background: ${props => props.bg};
    &:hover {
      background-color: ${props => props.bghv};
      border-color: ${props => props.borderhv};
    }
  }
`;

const SocialNav = props => {
  const myContext = React.useContext(ReactContext);
  return (
    <>
      <ConDiv
        border={myContext.mode.backLight}
        bg={myContext.mode.backColor}
        borderhv={myContext.mode.primaryLight}
        bghv={myContext.mode.primaryColor}
        color={myContext.mode.fontColor}
      >
        <a href={MyAccounts.insta}>
          <FaInstagram />
        </a>
        <a href={MyAccounts.reddit}>
          <FaReddit />
        </a>
        <a href={MyAccounts.github}>
          <FaGithub />
        </a>
      </ConDiv>
    </>
  );
};

export default SocialNav;
