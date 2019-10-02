import React from 'react';
import styled from 'styled-components';
import Colors from '../constants/Colors';
import { FaInstagram, FaReddit, FaTumblr, FaTwitter } from 'react-icons/fa';

const ConDiv = styled.div`
   position: fixed;
   bottom: 1rem;
   right: 1rem;
   a {
      transition: all 0.2s;
      margin: 0 5px;
      padding: 7px 9px;
      font-size: 13px;
      border: 1.5px solid ${Colors.backLight};
      border-radius: 3px;
      display: inline-block;
      text-decoration: none;
      color: ${Colors.fontColor};
      background: ${Colors.backColor};
      &:hover {
         background-color: ${Colors.primaryColor};
         border-color: ${Colors.primaryLight};
      }
   }
`;


const SocialNav = (props) => {
   return (
      <ConDiv>
         <a href="/"><FaTumblr /></a>
         <a href="/"><FaInstagram /></a>
         <a href="/"><FaReddit /></a>
         <a href="/"><FaTwitter /></a>
      </ConDiv>
   )
}

export default SocialNav
