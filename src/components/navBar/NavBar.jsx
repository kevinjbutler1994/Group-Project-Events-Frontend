import React from 'react'
import { useState } from 'react';
import "./navBar.css"
import { useNavigate } from 'react-router-dom';
import SearchBar from '../searchBar/SearchBar.jsx';
function NavBar({showSearch, handleChange, setSearchInput, searchInput}) {
    const navigate = useNavigate()
  const [yellowHelp, setyellowHelp] = useState(false);

  const helpStyle = yellowHelp
    ? "helpBtn navBarMenu yellowHelp"
    : "helpBtn navBarMenu";

  return (
    <div className='navBar'>
      <div className='logo'>Logo</div>
      <SearchBar showSearch={showSearch} handleChange={handleChange} setSearchInput={setSearchInput} searchInput={searchInput}/>
      <div className='navBarMenu'>
          <div className='computerOptions'>
            <button onClick={()=> navigate('/favorite') } className='navFavorites navBarMenuBtn'>Favorites</button>
            <button  onClick={()=> navigate('/signup') } className='navSignUp navBarMenuBtn'>SignUp</button>
            <button onClick={()=> navigate('/login') } className='navLogin navBarMenuBtn'>Login</button>
          </div>
          <button onClick={()=> {
              setyellowHelp(true)
              navigate('/help') 
            }}
            className={helpStyle}>
          </button>
      </div>
    </div>
  )
}
export default NavBar