import React from 'react'
import ImageGallery from 'react-image-gallery';
import myStyles from  "./chickenGallery.css";


import img01 from '../img/lamb/leg.jpg';
import img02 from '../img/lamb/ribs.jpg';
import img03 from '../img/lamb/thigh.jpg';


const images = [
    {
        original: img01 ,
        thumbnail: img01,
        description: "Leg lamb",
      },
      {
      original: img02 ,
      thumbnail: img02,
      description: "Lamb ribs",
    },
    {
        original: img03 ,
        thumbnail: img03,
        description: "Lamb thigh",
      },
    ]

function LambGallery() {
    return (
        <ImageGallery items={images} style={{myStyles}} />
        
    )
}

export default LambGallery