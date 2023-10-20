import LightModeIcon from "@mui/icons-material/LightMode";
import Search from "./Search";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-logo-container">
        <h1 className='nav-logo'>Image Gallery</h1>
      </div>

      <div className="nav-search-container">
        <Search />
      </div>

      <div className="nav-button-container">
        <button className='nav-button'>Explore</button>
        <button className='nav-button'>Collection</button>
        <button className='nav-button'>Utility</button>
      </div>

      <div className="nav-themeBtn">
        <LightModeIcon />
      </div>
    </div>
  );
}