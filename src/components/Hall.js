import React from 'react'
import styled from  "styled-components"
import TriRed from "./TriRed"
import Footer from "./Footer"
import Map from "./Map"
import cattle01 from "../img/daniel-quiceno-cattle.jpg"
import {LangContext} from "./LangContext"


function Hall() {

  
    return (
        <MainWrapper>
       
            <Container01>
                <div> <br/>
                <span></span>
                 </div>
                <img src={cattle01} alt="World map">
                </img>
            </Container01>
<TriRed></TriRed>
          
            <Map></Map>
            <Footer></Footer>
        </MainWrapper>

       
    )
}

export default Hall




const MainWrapper = styled.div`

padding: 0;
width: 100%;
display: flex;
flex-direction: column;

`

const Container01 = styled.div`

padding: 0;
width: 100vw; 

> img{
    max-width: 100vw;  
}

> div{
position: fixed;
font-size: 1.3em;
left: 30px;
width:100%;
color:white;
}
`
