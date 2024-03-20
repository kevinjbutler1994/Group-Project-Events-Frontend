import React from 'react'
import './searchBar.css'
function SearchBar({showSearch}) {
  return (
    <div className='searchBarContainer' id={showSearch}>
        <form className='searchBarForm'>
            <input className='searchBarInput' type='search' placeholder='Search...'></input>
            <div className='searchBarIcon'></div>
        </form>
    </div>
  )
}
export default SearchBar