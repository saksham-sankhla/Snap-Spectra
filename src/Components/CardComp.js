import React from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import './CardComp.css'

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
                <ThumbUpOffAltIcon />
                <div className='likes-number'>{item.likes}</div>
            </div>
        </div>
        
    </div>
  )
}