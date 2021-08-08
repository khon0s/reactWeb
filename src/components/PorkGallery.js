import React from 'react'
import ImageGallery from 'react-image-gallery';
import myStyles from  "./chickenGallery.css";

import img01 from '../img/pork/feet.jpg';
import img02 from '../img/pork/round-leg.jpg';

const images = [
    {
        original: img01 ,
        thumbnail: img01,
        description: "Pork feet",
      },
      {
      original: img02 ,
      thumbnail: img02,
      description: "Pork rounded leg",
    },
    ]

function PorkGallery() {
    return (
        <>
        <ImageGallery items={images} style={{myStyles}} />
        </>
    )
}

export default PorkGallery