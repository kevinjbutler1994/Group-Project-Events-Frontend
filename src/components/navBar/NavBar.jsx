import React from 'react'
import "./navBar.css"

function NavBar() {
  return (
    <div className='navBar'>
      <div className='logo'>Logo</div>
      <div className='searchBar'>Search Bar</div>
      <div className='navBarMenu'>
          <div className='computerOptions'>
            <button className='navFavorites navBarMenuBtn'>Favorites</button>
            <button className='navSignUp navBarMenuBtn'>SignUp</button>
            <button className='navLogin navBarMenuBtn'>Login</button>
          </div>
          <button className='helpBtn'></button>
      </div>

    </div>
  )
}

export default NavBar