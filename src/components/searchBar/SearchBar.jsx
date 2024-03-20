import React from 'react'
import './searchBar.css'

function SearchBar() {
  return (
    <div className='searchBarContainer'>
        <form className='searchBarForm'>
            <input className='searchBarInput' type='search' placeholder='Search...'></input>
            <div className='searchBarIcon'></div>
        </form>
    </div>
    // <form id>
    //     <input type='searchBar'></input>
    // </form>
  )
}

export default SearchBar