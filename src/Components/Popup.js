import React from 'react'
import './Popup.css'

export default function Popup({item, closePopup}) {
    console.log('in popup',item)
  return (
    <div className='popup-container' >
        <span><button onClick={closePopup}>Close</button></span>
        <div className='popup-wrapper'>
        <div className='img-container'>
            <img src={item.urls.small} alt={item.urls.alt_description} className='popup-img'/>

            <div className='img-btn-container'>
                <button className='btn-simple'>Share</button>
                <button className='btn-simple'>Info</button>
                <button className='btn-themed'>Download Image</button>
            </div>
        </div>

        <div className='info-container'>

            <div className='user-wrapper'>
            <img src={item.user.profile_image.medium} alt='user img' className='user-img'/>
                <div className='user-container'>
                    <h3 className='user-fullname'>{item.user.name}</h3>
                    <p className='user-username'>@{item.user.username}</p>
                </div>
                
                <div className='user-social-container'>
                    <p className='user-social'>instagram</p>
                    <p className='user-social'>twitter</p>
                </div>

                <div className='user-stats-container'>
                    <p className='user-stats'>downloads</p>
                    <p className='user-stats'>{item.likes}</p>
                </div>
            </div>

            <div className='tags-wrapper'>
                <h3 className='tags-header'>Related Tags</h3>
                <div className='tags-container'>
                    <div className='tag'>Animals in the wild</div>
                </div>
            </div>

        </div>
    </div>
</div>
        
  )
}
