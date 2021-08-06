
import React, {useContext} from "react";
import { NavLink as Linked } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/logo.png"
import Burger from './Burger';
import { LangContext } from "./LangContext"

 const Header = (props) => {

	const {langs, setLangs} =  useContext( LangContext )

	return (
		<>
			<NavWrapper>
				<NavLinked to="/">
					<img src={logo} alt="logo" />
				</NavLinked>
				<Selected id="catriLang" onClick={(e) => setLangs(e.target.value)} >
					<option value="en" >English</option>
					<option value="sp">Español</option>
					<option value="fr">Français</option>
				</Selected>
				<Burger />
			</NavWrapper>
		
		</>
	);
}

export default Header


const NavWrapper = styled.nav`

	background-color: #c0d5eb;
	height: 80px;
	display: flex;
	justify-content: space-between;
	padding: 0.5rem calc((100vw - 1000px) / 2);
	z-index: 10;

`;

const NavLinked = styled(Linked)`
// imported NavLink as Link
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

`;

const Selected = styled.select`
height: 40px;
border-radius: 8px;
margin-top: 20px;
cursor: pointer;
outline: none;
`;


