import React, {useContext} from 'react'
import {LangContext} from "./LangContext"
import Footer from "./Footer"
// import ChickenGallery from "./ChickenGallery"
import MeatsSelection from "./MeatsSelection"


function Service() {
      
  const {langs, setLangs} = useContext(LangContext) 

    return (
        <div>
           <h1 style={{textAlign: 'center', margin: "25px"}} >{ langOption["languages"][langs]["strings"]["title"] }</h1>
           <MeatsSelection/>
           <Footer></Footer>
        </div>
    )
}

export default Service

const langOption = {
    "languages":{
        "en":{
            "strings":{
                "title":"PRODUCTS"
            }
        },
        "sp":{
            "strings":{
                "title":"PRODUCTOS"
            }
        },
        "fr":{
            "strings":{
                "title":"PRODUITS"
            }
        }
    }
  }