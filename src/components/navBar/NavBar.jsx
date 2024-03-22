import React from "react";
import "./navBar.css";
import { useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar.jsx";
function NavBar({ showSearch }) {
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <div className="logo">Logo</div>

      <SearchBar showSearch={showSearch} />

      <div className="navBarMenu">
        <div className="computerOptions">
          <button
            onClick={() => navigate("/favorite")}
            className="navFavorites navBarMenuBtn"
          >
            Favorites
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="navSignUp navBarMenuBtn"
          >
            SignUp
          </button>
          <button
            onClick={() => navigate("/login")}
            className="navLogin navBarMenuBtn"
          >
            Login
          </button>
        </div>
        <button onClick={() => navigate("/help")} className="helpBtn"></button>
      </div>
    </div>
  );
}
export default NavBar;
