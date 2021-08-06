import React from 'react'
import members from "./team"
import Member_box from "./Member_box"
import Footer from "./Footer"
import styled from "styled-components";

function Contact() {
    let block_team = members.map( (el) => {  return  Member_box(el) } )
   return( 
   <>
   <Swrapper>
    {   
    block_team
    }
    </Swrapper>
 <Footer></Footer>
 </>
   )
}

export default Contact

const Swrapper = styled.div`
display: flex;
flex-flow: row wrap ;
justify-content: center;
`