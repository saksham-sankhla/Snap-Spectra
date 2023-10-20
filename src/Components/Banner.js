import React from 'react'
import './Banner.css'
import Search from './Search'

export default function Banner() {
  return (
        <div className='banner-container'>
            <h1 className='banner-header'>Download High Quality Images by creators</h1>
            <p className='banner-small'>Over 2.4 million+ stock Images by our talented community</p>
            <Search />
        </div>
  )
}
