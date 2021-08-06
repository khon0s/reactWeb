import React, { useContext } from "react"; 
import {LangContext} from "./LangContext"

function Lang() {

    const {langs, setLangs} = useContext(LangContext) 

    return (
        <>
        <h1>{ langOption["languages"][langs]["strings"]["title"] }</h1>
        </>
    )
}

export default Lang 

const langOption = {
    "languages":{
        "en":{
            "strings":{
                "title":"Hello word"
            }
        },
        "sp":{
            "strings":{
                "title":"Hola mundo"
            }
        },
        "fr":{
            "strings":{
                "title":"Salut monde"
            }
        }
    }
}