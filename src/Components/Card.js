import React from 'react'
import { dummyData } from './dummy'
import CardComp from './CardComp'
import './Card.css'

export default function Card() {

    const incomingData = dummyData

  return (
    <div className='card-container'>
      {incomingData.map((item) => {
        return <CardComp item={item} />
      })}
    </div>
  )
}
