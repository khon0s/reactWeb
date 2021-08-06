import React, { useContext } from "react"; 
import {LangContext} from "./LangContext"
import time from "../img/time.png"
import shipping from "../img/shipping.png"
import documents from "../img/documents.png"
import styled from "styled-components"



function TriRed() {
    const {langs, setLangs} = useContext(LangContext) 

    return (
        <AboutMain>
            <AboutBox>
            <img src={time} alt={"punctuality"} style={{"width":"150px"}}></img>
           <h3>{langOption["languages"][langs]["strings"]["punctual"]["title"]}</h3>
           <p>{langOption["languages"][langs]["strings"]["punctual"]["para"]}</p>
          
            </AboutBox>
            <AboutBox>
            <img src={shipping} alt={"shipping"} style={{"width":"220px"}}></img>
           <h3>{langOption["languages"][langs]["strings"]["ship"]["title"]}</h3>
           <p>{langOption["languages"][langs]["strings"]["ship"]["para"]}</p>
           
            </AboutBox>
            <AboutBox>
            <img src={documents} alt={"documents"} style={{"width":"140px"}}></img>
           <h3>{langOption["languages"][langs]["strings"]["docs"]["title"]}</h3>
           <p>{langOption["languages"][langs]["strings"]["docs"]["para"]}</p>
           
            </AboutBox>
        </AboutMain>
    )
}

export default TriRed

const langOption = {
    "languages": {
        "en": {
            "strings": {
                "punctual": {
                    "title": "PUNCTUALITY",
                    "para": "You only have to worry about what really matters",
                },
                "ship": {
                    "title": "SHIPMENT",
                    "para": "You only have to worry about what really matters",
                },
                "docs": {
                    "title": "PROCEDURE",
                    "para": "You only have to worry about what really matters",
                }
            }
        },
        "sp":{
            "strings":{
                "punctual": {
                    "title": "PUNTUALIDAD",
                    "para": "Para que solo tengas que preocuparte de lo que se te da bien",
                },
                "ship": {
                    "title": "ENVÍO",
                    "para": "Para que solo tengas que preocuparte de lo que se te da bien",
                },
                "docs": {
                    "title": "TRÁMITES",
                    "para": "Para que solo tengas que preocuparte de lo que se te da bien",
                }
            }
        },
        "fr":{
            "strings":{
                "punctual": {
                    "title": "PONCTUALITÉ",
                    "para": "Nous travaillons parceque vous vous concentrez sur ça que vous savez bien faire",
                },
                "ship": {
                    "title": "ENVOI",
                    "para": "Nous travaillons parceque vous vous concentrez sur ça que vous savez bien faire",
                },
                "docs": {
                    "title": "DÉMARCHES",
                    "para": "Nous travaillons parceque vous vous concentrez sur ça que vous savez bien faire",
                }
            }
        }
    }
}

const AboutMain = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 80%;
margin: auto;
margin-bottom: 35px;

@media (max-width: 811px) {
flex-wrap: wrap;
}

@media (max-width: 570px) {
    flex-direction: column;
    }
`
const AboutBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 20%;
margin: 10px;
margin: auto;

> h3{
    margin-top: 20px;
    margin-bottom: 15px;
}
> img{
    margin-top: 25px;
}
> p{
    text-align: center;
}

@media (max-width: 811px) {
    float: left;
width: 40%
}
`