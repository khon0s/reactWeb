
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
                  "title": "Misión",
                  "para": "Además, estos conceptos juegan un papel muy importante dentro de una organización, ya que están fuertemente ligados al bienestar y la productividad de sus empleados, ayudando a favorecer un ambiente laboral positivo y un aumento del nivel de compromiso de las personas que integran el equipo.",
              },
              "vis": {
                  "title": "Visión",
                  "para": "Cualquier empresa que desee tener éxito y busque beneficios, debe someterse a un sistema formal de dirección estratégica, es decir, seleccionar y definir perfectamente sus valores dentro de la cadena de valor de la compañía que la hará destacar frente a la competencia. Cualquier empresa que desee tener éxito y busque beneficios, debe someterse a un sistema formal de dirección estratégica, es decir, seleccionar y definir perfectamente sus valores dentro de la cadena de valor de la compañía que la hará destacar frente a la competencia.",
              },
              "val": {
                  "title": "Valores",
                  "para": "Tristemente los valores son los grandes olvidados o no se le destina la misma importancia que a los dos factores, lo cual es un tremendo error, y esto lo creo firmemente porque considero que los valores éticos deberían ser la brújula de todas las empresas y que respete la ética y los valores morales de todos los empleados de la corporación.",
              }
          }
      },
      "fr":{
          "strings":{
              "mis": {
                  "title": "Mission",
                  "para": "La mission est la raison d'être de votre projet entrepreneurial. La définir n'est pas une tâche facile, car la mission de l'entreprise se doit d'être aussi ambitieuse que réalisable. Une mission d'entreprise peut être sociétale ou organisationnelle. La mission est la raison d'être de votre projet entrepreneurial. La définir n'est pas une tâche facile, car la mission de l'entreprise se doit d'être aussi ambitieuse que réalisable. Une mission d'entreprise peut être sociétale ou organisationnelle.",
              },
              "vis": {
                  "title": "Vision",
                  "para": "Voici quelques exemples de missions d'entreprises, issues de plusieurs secteurs d'activités. Sous forme de slogans, ces missions sont aussi concrètes et parlantes qu'inspirantes et ambitieuses. La mission est la raison d'être de votre projet entrepreneurial. La définir n'est pas une tâche facile, car la mission de l'entreprise se doit d'être aussi ambitieuse que réalisable. Une mission d'entreprise peut être sociétale ou organisationnelle.",
              },
              "val": {
                  "title": "Valeurs",
                  "para": "Les valeurs sont l'ensemble des croyances communes développées au cœur de l'entreprise. Elles se transmettent aux collaborateurs, mais aussi aux clients. Les valeurs d'une entreprise ont une influence sur sa manière de travailler et de communiquer, et fondent ce que 'on nomme la culture d'entreprise.",
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