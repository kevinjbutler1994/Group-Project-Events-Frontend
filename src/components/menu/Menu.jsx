import { useState } from "react";
import "./menu.css";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  const [yellowHome, setYellowHome] = useState(true);
  const [yellowSearch, setYellowSearch] = useState(false);
   const [yellowFavorite, setYellowFavorite] = useState(false)
   const [yellowProfile, setYellowProfile] = useState(false)
  const homeStyle = yellowHome
    ? "homeBtn menuBtn yellowHome"
    : "homeBtn menuBtn";
    const searchStyle = yellowSearch
    ? "searchBtn menuBtn yellowSearch"
    : "searchBtn menuBtn";
    const favoriteStyle = yellowFavorite
    ? "favoritesBtn menuBtn yellowFavorite"
    : "favoritesBtn menuBtn";
    const profileStyle = yellowProfile
    ? "profileBtn menuBtn yellowProfile"
    : "profileBtn menuBtn";
  return (
    <div className="menu">
      <button
        onClick={() => {
          setYellowSearch(false);
          setYellowHome(true);
          setYellowProfile(false)
          setYellowFavorite(false)
          navigate("/");
        }}
        className={homeStyle}
      ></button>
      <button
        onClick={() => {
          setYellowSearch(true);
          setYellowHome(false);
          setYellowProfile(false)
          setYellowFavorite(false)
          navigate("/search")
        }}
          className={searchStyle}
      ></button>
      <button
        onClick={() => {
          setYellowSearch(false);
          setYellowHome(false);
          setYellowProfile(false)
          setYellowFavorite(true)
          navigate("/favorite")}
        }
        className={favoriteStyle}
      ></button>
      <button
        onClick={() => {
          setYellowSearch(false);
          setYellowHome(false);
          setYellowProfile(true)
          setYellowFavorite(false)
          navigate("/profile")}
        }
        className= {profileStyle}
      ></button>
    </div>
  );
}

export default Menu;
