import React from "react";
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <Link to="/">
          <h1 className='title'>Doggyd<img src="./images/dog.png" />pt</h1>
        </Link>
        <Link to="/profile">
          <button onClick={() => localStorage.setItem('previousPage', 'Profile')} className='header-button'>My Dogs</button>    
        </Link>
        <Link to='/shelters'>
          <button className='header-button'>Find a Shelter</button> 
        </Link>
        <Link to='/matchMe'>
          <button className='header-button'>Match Me</button> 
        </Link>  
    </header>
  )
}

export default Header;
