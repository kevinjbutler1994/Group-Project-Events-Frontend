import React from 'react'
import "./menu.css"
import { useNavigate } from 'react-router-dom';

function Menu() {
  const navigate = useNavigate()
  return (
    <div className='menu'>
        <button onClick={()=> navigate('/') } className= 'homeBtn menuBtn'></button>
        <button onClick={()=> navigate('/search') } className='searchBtn menuBtn'></button>
        <button onClick={()=> navigate('/favorite') } className='favoritesBtn menuBtn'></button>
        <button onClick={()=> navigate('/profile') } className='profileBtn menuBtn'></button>
    </div>
  )
}

export default Menu