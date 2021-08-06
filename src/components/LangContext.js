import React, { useState, createContext } from "react"


export const LangContext = createContext("sp") 

export const LangProvider = (props) => {

    const [langs, setLangs] = useState("sp")
   const value = { langs, setLangs }

    return(
        <LangContext.Provider value={ value }  >
            {props.children}
        </LangContext.Provider>
    )
}

export default LangContext