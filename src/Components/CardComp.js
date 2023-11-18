import React from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import './CardComp.css'

export default function CardComp({item}) {
console.log(item)
  return (
    <div className='card-wrapper'>
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
// full
// : 
// "https://images.unsplash.com/photo-1542027571667-895927bcf965?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTgyNDh8MHwxfHNlYXJjaHwzMHx8cml2ZXIlMjBhbmQlMjBzYW5kfGVufDB8fHx8MTcwMDMwNTA4OXww&ixlib=rb-4.0.3&q=85"
// raw
// : 
// "https://images.unsplash.com/photo-1542027571667-895927bcf965?ixid=M3w1MTgyNDh8MHwxfHNlYXJjaHwzMHx8cml2ZXIlMjBhbmQlMjBzYW5kfGVufDB8fHx8MTcwMDMwNTA4OXww&ixlib=rb-4.0.3"
// regular
// : 
// "https://images.unsplash.com/photo-1542027571667-895927bcf965?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTgyNDh8MHwxfHNlYXJjaHwzMHx8cml2ZXIlMjBhbmQlMjBzYW5kfGVufDB8fHx8MTcwMDMwNTA4OXww&ixlib=rb-4.0.3&q=80&w=1080"
// small
// : 
// "https://images.unsplash.com/photo-1542027571667-895927bcf965?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTgyNDh8MHwxfHNlYXJjaHwzMHx8cml2ZXIlMjBhbmQlMjBzYW5kfGVufDB8fHx8MTcwMDMwNTA4OXww&ixlib=rb-4.0.3&q=80&w=400"
// small_s3
// : 
// "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1542027571667-895927bcf965"
// thumb
// : 
// "https://images.unsplash.com/photo-1542027571667-895927bcf965?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTgyNDh8MHwxfHNlYXJjaHwzMHx8cml2ZXIlMjBhbmQlMjBzYW5kfGVufDB8fHx8MTcwMDMwNTA4OXww&ixlib=rb-4.0.3&q=80&w=200"