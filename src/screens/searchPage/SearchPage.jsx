
import React from 'react';
import NavBar from "../../components/navBar/NavBar.jsx";
import MultiFilters from "../../components/multiFilters/MultiFilters.jsx";
import "./searchPage.css";

function SearchPage() {
  return (
    <>
    <NavBar showSearch="show"/>
    <div>SearchPage</div>
    <MultiFilters/>
    </>

  )
}

export default SearchPage