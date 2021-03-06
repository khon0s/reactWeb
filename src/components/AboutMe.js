
import React, {useContext} from 'react'
import {LangContext} from "./LangContext"
import Footer from "./Footer"
import styled from "styled-components"

function AboutMe() {
  const {langs, setLangs} = useContext(LangContext) 
    return (
     <>
     <DivWrapper>
    <H2>{langOption["languages"][langs]["strings"]["mis"]["title"]}</H2>
    <p>{langOption["languages"][langs]["strings"]["mis"]["para"]}</p>
    <H2>{langOption["languages"][langs]["strings"]["vis"]["title"]}</H2>
    <p>{langOption["languages"][langs]["strings"]["vis"]["para"]}</p>
    <H2>{langOption["languages"][langs]["strings"]["val"]["title"]}</H2>
    <p>{langOption["languages"][langs]["strings"]["val"]["para"]}</p>
  </DivWrapper>
            <Footer></Footer>
       </>
    )
}

export default AboutMe

const langOption = {
  "languages": {
      "en": {
          "strings": {
              "mis": {
                  "title": "Mission",
                  "para": "We are an international trading company that works for importing frozen meat from all over the world and export to CHINA (PRC) also Hong Kong market. I am currently working for the Spanish branch (SIMBAIII IMP & EXP S.L). The company was established in 2019 and has always maintained a good cooperative relationship with us. Long-term exchanges and cooperation with large meat groups.",
              },
              "vis": {
                  "title": "Vision",
                  "para": "As the company's purchasing department, I am committed to providing the company with high-quality resources and looking for partners with strong strength and good reputation. Currently we search for beef, pig and poultry products of all kinds .As the company's purchasing department, I am committed to providing the company with high-quality resources and looking for partners with strong strength and good reputation. Currently we search for beef, pig and poultry products of all kinds.",
              },
              "val": {
                  "title": "Values",
                  "para": "Our company is based on faire trading and a concern for the environment. As the company's purchasing department, I am committed to providing the company with high-quality resources and looking for partners with strong strength and good reputation. Currently we search for beef, pig and poultry products of all kinds",
              }
          }
      },
      "sp":{
          "strings":{
              "mis": {
                  "title": "Misi??n",
                  "para": "Adem??s, estos conceptos juegan un papel muy importante dentro de una organizaci??n, ya que est??n fuertemente ligados al bienestar y la productividad de sus empleados, ayudando a favorecer un ambiente laboral positivo y un aumento del nivel de compromiso de las personas que integran el equipo.",
              },
              "vis": {
                  "title": "Visi??n",
                  "para": "Cualquier empresa que desee tener ??xito y busque beneficios, debe someterse a un sistema formal de direcci??n estrat??gica, es decir, seleccionar y definir perfectamente sus valores dentro de la cadena de valor de la compa????a que la har?? destacar frente a la competencia. Cualquier empresa que desee tener ??xito y busque beneficios, debe someterse a un sistema formal de direcci??n estrat??gica, es decir, seleccionar y definir perfectamente sus valores dentro de la cadena de valor de la compa????a que la har?? destacar frente a la competencia.",
              },
              "val": {
                  "title": "Valores",
                  "para": "Tristemente los valores son los grandes olvidados o no se le destina la misma importancia que a los dos factores, lo cual es un tremendo error, y esto lo creo firmemente porque considero que los valores ??ticos deber??an ser la br??jula de todas las empresas y que respete la ??tica y los valores morales de todos los empleados de la corporaci??n.",
              }
          }
      },
      "fr":{
          "strings":{
              "mis": {
                  "title": "Mission",
                  "para": "La mission est la raison d'??tre de votre projet entrepreneurial. La d??finir n'est pas une t??che facile, car la mission de l'entreprise se doit d'??tre aussi ambitieuse que r??alisable. Une mission d'entreprise peut ??tre soci??tale ou organisationnelle. La mission est la raison d'??tre de votre projet entrepreneurial. La d??finir n'est pas une t??che facile, car la mission de l'entreprise se doit d'??tre aussi ambitieuse que r??alisable. Une mission d'entreprise peut ??tre soci??tale ou organisationnelle.",
              },
              "vis": {
                  "title": "Vision",
                  "para": "Voici quelques exemples de missions d'entreprises, issues de plusieurs secteurs d'activit??s. Sous forme de slogans, ces missions sont aussi concr??tes et parlantes qu'inspirantes et ambitieuses. La mission est la raison d'??tre de votre projet entrepreneurial. La d??finir n'est pas une t??che facile, car la mission de l'entreprise se doit d'??tre aussi ambitieuse que r??alisable. Une mission d'entreprise peut ??tre soci??tale ou organisationnelle.",
              },
              "val": {
                  "title": "Valeurs",
                  "para": "Les valeurs sont l'ensemble des croyances communes d??velopp??es au c??ur de l'entreprise. Elles se transmettent aux collaborateurs, mais aussi aux clients. Les valeurs d'une entreprise ont une influence sur sa mani??re de travailler et de communiquer, et fondent ce que 'on nomme la culture d'entreprise.",
              }
          }
      }
  }
}

const DivWrapper = styled.div`
width: 80%;
margin:25px auto;
`
const H2 = styled.h2`
margin: 15px 0px;
`