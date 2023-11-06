import React, { useState } from 'react'
import { dummyData } from './dummy'
import CardComp from './CardComp'
import './Card.css'

export default function Card(props) {

  console.log('card rendered')
    // const incomingData = props.searchResults.length > 0 ? props.searchResults : dummyData;

    const [images, setImages] = useState(dummyData)

    const incomingData = props.searchResults

    if(props.searchResults.length > 0){
      console.log('set image fn ran')
      setImages(incomingData)
    }

  return (
    <div className='card-container'>
      {images.map((item) => {
        return <CardComp item={item} />
      })}
    </div>
  )
}
