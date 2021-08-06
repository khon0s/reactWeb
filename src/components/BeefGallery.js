import React from 'react'
import ImageGallery from 'react-image-gallery';
import myStyles from  "./chickenGallery.css";


import img01 from '../img/beef/conical.jpg';
import img02 from '../img/beef/ribs.jpg';

const images = [
    {
        original: img01 ,
        thumbnail: img01,
        description: "Conical muscle",
      },
      {
      original: img02 ,
      thumbnail: img02,
      description: "ribs",
    },
    ]

function BeefGallery() {
    return (
        <ImageGallery items={images} style={{myStyles}} />
        
    )
}

export default BeefGallery