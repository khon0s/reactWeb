import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <Footers>
            <ul>
            <Parag>Tel: 91-341-87-54</Parag>
            <Parag>simbaiii@simbaiii.com</Parag>
            <Parag>Calle de la piruleta, 5.</Parag>
            </ul>
        </Footers>
    )
}

export default Footer



const Footers = styled.div`
height: 120px;
width; 100vw;
background-color: black;

`
const Parag = styled.li`
color: white;
text-align: center;
margin-top: 8px;


`