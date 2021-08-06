import React from 'react'
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

function Navigation({open}) {

    function show(){
        let optionOn = document.getElementById("catriLang");
              
         console.log( optionOn.value)
        }

    return (
        <Navigationss open={open}>
            <select id="catriLang" onClick={show} name="en" >
                <option value="en" >English</option>
                <option value="sp">Español</option>
                <option value="fr">Français</option>
            </select>
        
        <NavLink to="/about-me">About me</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/service">Service</NavLink>
        </Navigationss>
    )
}

export default Navigation

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
`;


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