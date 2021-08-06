import React from 'react'
import styled from "styled-components";
import chickenIcon from "../img/meats/chicken.png"
import cowIcon from "../img/meats/cow.png"
import pigIcon from "../img/meats/pinkPig.png"
import lambIcon from "../img/meats/lamb.png"


function MeatsSelection() {
	return (
		<MeatWrapper>

			<MeatImg0 onClick={redirectToPork} ></MeatImg0>
			<MeatImg1 onClick={redirectToBeef} ></MeatImg1>
			<MeatImg2 onClick={redirectToLamb} ></MeatImg2>
			<MeatImg3 onClick={redirectToChicken} ></MeatImg3>

		</MeatWrapper>
	);
}

export default MeatsSelection

function redirectToChicken() {
	window.location = "https://stoic-jennings-205e43.netlify.app/service/chicken"
}

function redirectToBeef() {
	window.location = "https://stoic-jennings-205e43.netlify.app/service/beef"
}

function redirectToPork() {
	window.location = "https://stoic-jennings-205e43.netlify.app/service/pork"
}

function redirectToLamb() {
	window.location = "https://stoic-jennings-205e43.netlify.app/service/lamb"
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