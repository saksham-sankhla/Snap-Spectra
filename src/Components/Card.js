import React, { useState , useEffect } from 'react'
import { dummyData } from './dummy'
import CardComp from './CardComp'
import './Card.css'

export default function Card(props) {
    const [images, setImages] = useState(dummyData)

    //console.log("Images from card", images)
    console.log("props from card", props)

    useEffect(() => {
      if (props.searchResults.length > 0) {
        console.log('set image fn ran');
        setImages(props.searchResults);
      } else {
        // Reset to dummyData when searchResults is empty
        setImages(dummyData);
      }
    }, [props.searchResults]);
  

  return (
    <div className='card-container'>
      {images.map((item) => {
        return <CardComp item={item} />
      })}
    </div>
  )
}
