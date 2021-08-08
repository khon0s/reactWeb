import React from 'react'
import styled from "styled-components";
import chickenIcon from "../img/meats/chicken.png"
import cowIcon from "../img/meats/cow.png"
import pigIcon from "../img/meats/pinkPig.png"
import lambIcon from "../img/meats/lamb.png"
import { NavLink as Link } from "react-router-dom";


function MeatsSelection() {
    return (
			<MeatWrapper>
			       <NavLink to="/service/pork" >
     <MeatImg0 ></MeatImg0>
        </NavLink>
			
			<MeatImg1 onClick={redirectToBeef} ></MeatImg1>
			<MeatImg2 onClick={redirectToLamb} ></MeatImg2>
			<MeatImg3 onClick={redirectToChicken} ></MeatImg3>
		
			</MeatWrapper>
		);
}

export default MeatsSelection

function redirectToChicken(){
	window.location = "/service/chicken"
  }
  
  function redirectToBeef(){
	  const currUrl = window.location.href 
	  console.log(currUrl)
	  setInterval( () => {window.location = currUrl+"/beef"}, 3000 )
	}

	function redirectToPork(){
		window.location = "https://stoic-jennings-205e43.netlify.app/service/pork"
	  }

	  function redirectToLamb(){
		window.location = "/lamb"
	  }

const MeatWrapper = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;

width: 80%;
height: 60%;
margin: 50px auto;
`



const MeatImg0 = styled.img`
width: 400px;
height: 400px;
cover-fit: none;
background-image: url(${pigIcon});
object-position: top-right;
`
const MeatImg1 = styled.img`
width: 400px;
height: 400px;
cover-fit: none;
background-image: url(${cowIcon});
`
const MeatImg2 = styled.img`
width: 400px;
height: 400px;
cover-fit: none;
background-image: url(${lambIcon});
`
const MeatImg3 = styled.img`
width: 400px;
height: 400px;
cover-fit: none;
background-image: url(${chickenIcon});
`


const NavLink = styled(Link)`

  color: #fff;


`