import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import { Input } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
// import { useState } from 'react';

export default function Search(props){



  // const [searchInput, setSearchInput] = useState('')
  // const [searchResults, setSearchResults] = useState([])

  // const accessKey = process.env.REACT_APP_API_KEY

  // const inputHandler = (event) => {
  //   setSearchInput(event.target.value)
  // }

  // const handleSearch = () => {

  //   const apiUrl = `https://api.unsplash.com/search/photos/?query=${searchInput}&page=1&per_page=30`;

  //   fetch(apiUrl, {
  //     headers: {
  //       'Authorization': `Client-ID ${accessKey}`
  //     }
  //   })
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error('HTTP Error!')
  //     }
  //     return response.json()
  //   })
  //   .then (data => {(setSearchResults(data.results))})
  //   .catch(error => {
  //     console.error('Error fetching data from Unsplash:', error);
  //   });
  // }
  // 
  // console.log(searchResults)
  

  return(
    <div className='search-container'>
      <Input type='search' id='nav-search' onChange={(event) => props.item.onChange(event)} onClick={props.item.onClick} placeholder='Search images here' className='search-input'
      startAdornment={
        <InputAdornment position="start">
              <SearchIcon />
        </InputAdornment>
      }
      />
    </div>
  );
}