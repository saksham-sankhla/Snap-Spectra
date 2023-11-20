import React from 'react'

export default function Popup() {
  return (
    <div className='popup-container'>

        <div className='img-container'>
            <img src='./media/mountain.jpg' alt='clicked img' className='popup-img'/>

            <div className='img-btn-container'>
                <button className='btn-simple'>Share</button>
                <button className='btn-simple'>Info</button>
                <button className='btn-themed'>Download Image</button>
            </div>
        </div>

        <div className='info-container'>

            <img src='https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32' alt='user img' className='user-img'/>

            <div className='user-wrapper'>
                <div className='user-container'>
                    <h3 className='user-fullname'> Jacob Jones</h3>
                    <p className='user-username'>@jacobclicks</p>
                </div>
                
                <div className='user-social-container'>
                    <p className='user-social'>instagram</p>
                    <p className='user-social'>twitter</p>
                </div>

                <div className='user-stats-container'>
                    <p className='user-stats'>downloads</p>
                    <p className='user-stats'>likes</p>
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
  )
}
