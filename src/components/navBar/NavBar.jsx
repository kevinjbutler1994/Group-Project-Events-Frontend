import React, { useEffect } from "react";
import { useState } from "react";
import "./navBar.css";
import { useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar.jsx";
import { signUp, signOut } from "../../services/users.js";

function NavBar({ showSearch, user }) {
  const navigate = useNavigate();
  const [yellowHelp, setyellowHelp] = useState(false);

  console.log(user);
  const helpStyle = yellowHelp
    ? "helpBtn navBarMenu yellowHelp"
    : "helpBtn navBarMenu";

  let signup = (user? (
    <button>hi</button>
  ) : (
    <button
      onClick={() => navigate("/signup")}
      className="navSignUp navBarMenuBtn"
    >
      SignUp
    </button>
    
  ));
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
          {signup}
          <button
            onClick={() => navigate("/login")}
            className="navLogin navBarMenuBtn"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/logout")}
            className="navLogout navBarMenuBtn"
          >
            Logout
          </button>
          <button
            onClick={() => navigate("token")}
            className="userName navBarMenuBtn"
          ></button>
          <button
            onClick={() => navigate("/favorite")}
            className="navFavorites navBarmenuBtn"
          >
            Favorites
          </button>
        </div>
        <button
          onClick={() => {
            setyellowHelp(true);
            navigate("/help");
          }}
          className={helpStyle}
        ></button>
      </div>
    </div>
  );
}
export default NavBar;
