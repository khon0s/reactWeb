import React, {useContext} from "react"
import {LangContext} from "./LangContext"
import { WorldMap } from "react-svg-worldmap"
import styled from "styled-components"


export default function Map() {

  const {langs, setLangs} = useContext(LangContext) 

  const data =
    [
      { country: "cn", value: "中国" }, // china
      { country: "us", value: "美国" },  // united states
      { country: "br", value: "巴西"  },  // brazil
      { country: "ru", value: "俄罗斯" },  // russia
      { country: "mx", value: "墨西哥"},   // mexico
      { country: "ch", value: "瑞士人"},   // swizerland
      { country: "fr", value: "法国"},   // spain
    ]

    const stylingFunction = (context ) => {
      
        return { fill: context.country === "CN" ? "red" : context.color, stroke: "green", strokeWidth: 1, cursor: "pointer" }
      }

  return (
    <MapWrapper >
        <h4>{ langOption["languages"][langs]["strings"]["title"] }</h4>
       <WorldMap color="#2d2a8b"  style={{"fillOpacity": "none"}}  borderColor="black" styleFunction={stylingFunction}  value-suffix="people" size="xl" data={data} />
    </MapWrapper>
  )
}

const langOption = {
  "languages":{
      "en":{
          "strings":{
              "title":"Our Providers"
          }
      },
      "sp":{
          "strings":{
              "title":"Nuestros proveedores"
          }
      },
      "fr":{
          "strings":{
              "title":"Notre fournisseurs"
          }
      }
  }
}

const MapWrapper = styled.div`
width: 100vw;
text-align: center;
font-size: 30px;
`
