import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiCode, FiMail } from 'react-icons/fi';
import { ReactContext } from '../Context';

const Nav = styled.div`
   height: 100vh;
   position: relative;
   top: 0px;
   left: 0;
   overflow: none;
   width: 4rem;
   background: ${props => props.background};
   color: ${props => props.color};
`

const NavMenu = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   position: absolute;
   top: 50%;
   margin-top: -120px;
   flex: 1;
   width: 100%;

   a {
      transition: 0.4s all;
      display: block;
      text-align: center;
      width: 100%;
      margin: 3px 0;
      z-index: 2;
      position: relative;
      padding: 5px 0;
      display: block;
      font-size: 1.5rem;
      color: ${props => props.color};
      text-decoration: none;
   }

   a.active {
      color: ${props => props.hover};
   }

   a:hover {
      color: ${props => props.hover};
   }
`


const Navbar = (props) => {
   const myContext = React.useContext(ReactContext);
   const linkArray = [
      {
         link: '/',
         child: <FiHome />,
         name: "Home"
      },
      {
         link: '/about',
         child: <FiUser />,
         name: "About"
      },
      {
         link: '/projects',
         child: <FiCode />,
         name: "Projects"
      },
      {
         link: '/contact',
         child: <FiMail />,
         name: "Contact"
      },
   ];
   return (
      <Nav background={myContext.mode.navColor} color={myContext.mode.fontColor}>
         <NavMenu className="myNav" color={myContext.mode.fontColor} hover={myContext.mode.primaryColor}>
         {
            linkArray.map((e, i) => {
               if(i === props.active){
                  return <Link to={e.link} className="active" key={i}>{e.child}</Link>
               }else {
                  return <Link to={e.link} key={i}>{e.child}</Link>
               }
            })
         }
         </NavMenu>
      </Nav>
   )
}


export default Navbar
