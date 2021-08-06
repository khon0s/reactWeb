import React from 'react'
import ImageGallery from 'react-image-gallery';
import myStyles from  "./chickenGallery.css";

import img01 from '../img/chicken/chicken-paw.jpg';
import img01th from '../img/chicken/chicken-paw.jpg';
import img02 from '../img/chicken/Drumstick-with-skin.jpg';
import img03 from  "../img/chicken/Leg-quarter.jpg" ;
import img04 from '../img/chicken/Middle-joint-wing.jpg';
import img05 from '../img/chicken/Paw-A.jpg';
import img06 from '../img/chicken/Whole-wing-three-joint-wing.jpg';



const images = [
    {
        original: img01 ,
        thumbnail: img01th,
        description: "Paw",
      },
      {
        original: img02,
        thumbnail: img02,
        description: "Drumstick with skin",
      },
      {
        original: img03,
        thumbnail: img03,
        description: "Leg quarter",
      },
      {
        original: img04,
        thumbnail: img04,
        description: "Middle joint wing",
      },
      {
        original: img05,
        thumbnail: img05,
        description: "Paw A",
      },
      { 
        original: img06,
        thumbnail: img06,
        description: "Whole wing three joint wing",
      },
    ]

function ChickenGallery() {
    return (
        <ImageGallery items={images} style={{myStyles}} />
        
    )
}

export default ChickenGallery
