import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiEye, FiMail } from 'react-icons/fi';
import Colors from '../constants/Colors';

const Nav = styled.div`
   height: 100vh;
   position: fixed;
   top: 0px;
   left: 0;
   overflow: none;
   width: 4rem;
   background: ${Colors.primaryColor};
   color: white;
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
      color: white;
      text-decoration: none;
   }

   a.active {
      color: ${Colors.activeColor};
   }

   a:hover {
      color: ${Colors.accentColor};
   }
`


const Navbar = (props) => {
   const linkArray = [
      {
         link: '/',
         child: <FiHome />
      },
      {
         link: '/about',
         child: <FiUser />
      },
      {
         link: '/projects',
         child: <FiEye />
      },
      {
         link: '/contact',
         child: <FiMail />
      },
   ];
   return (
      <Nav>
         <NavMenu className="myNav">
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
