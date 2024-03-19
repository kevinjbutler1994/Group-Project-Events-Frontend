import React from 'react'
import "./menu.css"

function Menu() {
  return (
    <div className='menu'>
        <button className='homeBtn menuBtn'></button>
        <button className='searchBtn menuBtn'></button>
        <button className='favoritesBtn menuBtn'></button>
        <button className='profileBtn menuBtn'></button>
    </div>
  )
}

export default Menu