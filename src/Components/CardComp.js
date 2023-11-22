import React from 'react'
import './CardComp.css'
import { ThumbUp } from '@mui/icons-material';

export default function CardComp({item , onClick}) {

  return (
    <div className='card-wrapper' onClick={() => onClick(item)}>
        <img alt='' src={item.urls.small_s3} className='thumbnail' />
        
        <div className='user-info-wrapper'>
            <div className='user-img-container'>
                <img className='user-thumbnail' alt='user' src={item.user.profile_image.medium}  />
            </div>
            <div className='user-container'>
                <h2 className='user-name'>{item.user.name}</h2>
                <p className='user-social'>@{item.user.username}</p>
            </div>

            <div className='likes-container'>
            <ThumbUp style={{width: '18px' , height: '15px'}} />
                <div className='likes-number'>{item.likes}</div>
            </div>
        </div>
        
    </div>
  )
}