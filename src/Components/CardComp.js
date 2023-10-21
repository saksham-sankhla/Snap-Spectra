import React from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import './CardComp.css'

export default function CardComp({item}) {

  return (
    <div className='card-wrapper'>
        <img alt='' src={item.urls.thumb} className='thumbnail' />
        
        <div className='user-info-wrapper'>
            <div className='user-img-container'>
                <img className='user-thumbnail' alt='user' src={'https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64'}  />
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
