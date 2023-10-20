import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import { Input } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

export default function Search(){
  return(
    <div className='search-container'>
      <Input type='search' id='nav-search' placeholder='Search images here' className='search-input'
      startAdornment={
        <InputAdornment position="start">
              <SearchIcon />
        </InputAdornment>
      }
      />
    </div>
  );
}