// import React from 'react'
// import './searchBar.css'
// function SearchBar({showSearch}) {
//   return (
//     <div className='searchBarContainer' id={showSearch}>
//         <form className='searchBarForm'>
//             <input className='searchBarInput' type='search' placeholder='Search...'></input>
//             <div className='searchBarIcon'></div>
//         </form>
//     </div>
//   )
// }
// export default SearchBar

/////////////////////////////////////////////////////////////////////////////


import React, { useState } from 'react';
import './searchBar.css'
// import { createEvent } from '@testing-library/react';
import {getEvents} from '../../services/events.js';

const SearchBar = ({handleChange, setSearchInput, searchInput}) => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}      
        />

      <table>
           <thead>
        <th>Event Title</th>          
          </thead>
        <tbody>
          {searchResults?.map((event, index) => (
            <tr key={index}>
              <td>{event.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchBar;