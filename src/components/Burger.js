import React, { useState, useContext } from 'react';
import {LangContext} from "./LangContext"
import styled from 'styled-components';
//import Navigation from './Navigation';
import { NavLink as Link } from "react-router-dom";

const Burger = () => {
   
  const {langs, setLangs} = useContext(LangContext) 
  const [open, setOpen] = useState(false)

  function openUp(){
     setOpen(!open)
  }

  return (
    <>
      <StyledBurger open={open} onClick={openUp}>
        <div />
        <div />
        <div />
      </StyledBurger>

      <Navigationss open={open}>
        
        <NavLink to="/about-me" onClick={openUp}>
        {langOption["languages"][langs]["strings"]["about"]["title"]}
        </NavLink>
        <NavLink to="/contact" onClick={openUp}>
        {langOption["languages"][langs]["strings"]["team"]["title"]}
        </NavLink>
        <NavLink to="/service" onClick={openUp}>
        {langOption["languages"][langs]["strings"]["pro"]["title"]}
        </NavLink>
        </Navigationss>
    </>
  )
}

export default Burger

const langOption = {
  "languages": {
      "en": {
          "strings": {
              "about": {
                  "title": "About us",
              },
              "team": {
                  "title": "Our team",
              },
              "pro": {
                  "title": "Products",
              }
          }
      },
      "sp":{
          "strings":{
              "about": {
                  "title": "Sobre nosotros",
              },
              "team": {
                  "title": "Nuestro equipo",
              },
              "pro": {
                  "title": "Productos",
              }
          }
      },
      "fr":{
          "strings":{
      "about": {
                  "title": "Sur nous",
              },
              "team": {
                  "title": "Notre équipe",
              },
              "pro": {
                  "title": "Produits",
              }
          }
      }
  }
}


const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
 padding:18px 20px ;

  z-index: 20;
  display: none;
  @media (max-width: 768px) {
      // here 
      position: ${({ open }) => open ? 'fixed' : 'relative'}; 
      top: 18px;
      right: 20px;

    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

// navigation


const Navigationss = styled.div`
	  display: flex;
  align-items: center;
  margin-right: 0px;

@media screen and (max-width: 768px) {

    flex-flow: column nowrap;
    background-color: #337ab7;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100%;
    width: 100vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
}
`


const NavLink = styled(Link)`

  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

&.active{
	color: #2c3033;
	font-weight: bold;
	
}
`

