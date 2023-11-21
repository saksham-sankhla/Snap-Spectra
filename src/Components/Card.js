import React, { useState , useEffect } from 'react'
import { dummyData } from './dummy'
import CardComp from './CardComp'
import './Card.css'

export default function Card(props) {
    const [images, setImages] = useState(dummyData)

    useEffect(() => {
      if (props.searchResults.length > 0) {
        setImages(props.searchResults);
      } else {
        setImages(dummyData);
      }
    }, [props.searchResults]);
  

  return (
    <div className='card-container'>
      {images.map((item) => {
        return <CardComp item={item} onClick={props.onClick} />
      })}
    </div>
  )
}
