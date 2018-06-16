import React from "react";
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <Link to="/matchMe">
          <h1 className='title'>Rescue-Me NYC</h1>
        </Link>
        
        <Link to='/profile'>
          <button onClick={() => localStorage.setItem('previousPage', 'Profile')} className='header-button'>My Dogs</button>    
        </Link>
        <Link to='/shelters'>
          <button className='header-button'>Find a Shelter</button> 
        </Link>
        
    </header>
  )
}

export default Header;
