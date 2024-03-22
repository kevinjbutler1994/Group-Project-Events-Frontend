import { useState } from "react";
import "./navBar.css";
import { useNavigate, NavLink } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar.jsx";
import { signOut } from "../../services/users.js";

function NavBar({ showSearch, user }) {
  const navigate = useNavigate();
  const [yellowHelp, setyellowHelp] = useState(false);

  const helpStyle = yellowHelp
    ? "helpBtn navBarMenu yellowHelp"
    : "helpBtn navBarMenu";

  let authenticated = (
    <>
      <button
        onClick={() => navigate("/favorite")}
        className="navFavorites navBarMenuBtn"
      >
        Favorites
      </button>
      <button
        onClick={() => navigate("/profile")}
        className="navFavorites navBarMenuBtn"
      >
        Profile
      </button>
      <button
        onClick={async () => {
          await signOut()
          navigate("/login")
        }}
        className="navLogout navBarMenuBtn"
      >
        Logout
      </button>
    </>
  )

  let unauthenticated = (
    <>
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
    </>
  );

  let alwaysOptions = (
    <>
      <button
        onClick={() => {
          setyellowHelp(true);
          navigate("/help");
        }}
        className={helpStyle}
      ></button>
    </>
  )

  return (
    <div className="navBar">

      <NavLink to="/">
        <div className="logo">Logo</div>
      </NavLink>
      <SearchBar showSearch={showSearch} />
      <div className="navBarMenu">
        <div className="computerOptions">
          {user ? authenticated : unauthenticated}
        </div>
          {alwaysOptions}
      </div>
    </div>
  );
}
export default NavBar;
