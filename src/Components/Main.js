import React from 'react'
import Banner from './Banner'
import Card from './Card'
import Navbar from './Navbar'
import { useState } from 'react'

export default function Main() {
  console.log('main')

  const [searchInput, setSearchInput] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const accessKey = process.env.REACT_APP_API_KEY

  const inputHandler = (event) => {
    setSearchInput(event.target.value)
  }

  const handleSearch = () => {
    console.log('handleSearch called')
    const apiUrl = `https://api.unsplash.com/search/photos/?query=${searchInput}&page=1&per_page=30&client_id=${accessKey}`;

    fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('HTTP Error!')
      }
      return response.json()
    })
    .then (data => {(setSearchResults({data}))})
    .catch(error => {
      console.error('Error fetching data from Unsplash:', error);
    });
  }
  
  return (
    <div className='main-container'>
        <Navbar onChange={inputHandler} onClick={handleSearch} />
        <Banner onChange={inputHandler} onClick={handleSearch} />
        {searchResults ? <Card searchResults={searchResults} /> : <Card />}
    </div>
  )
}
