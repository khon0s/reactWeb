import React from "react";
import styled from "styled-components";


 function Member_box(member) {
	return (
		<Sbox  key={ member.id } >
			<div className="box_img" > 
			<img src={member.img} alt={member.name} style={{"width":"250px"}} ></img>
			</div>
			<BoxData>
				<p>{member.name} {member.last_name} </p>
				<p>{member.rank}</p>
				<p>{member.email}</p>
				<p>{member.phone}</p>
			</BoxData>
		</Sbox>
	);
}

export default Member_box;


const Sbox = styled.div`
width: auto;
background-color: #c0d5eb;
margin: 10px;
padding: 0 0 10px 0 ;
margin: 15px

`

const BoxData = styled.div`
margin: 15px;
`