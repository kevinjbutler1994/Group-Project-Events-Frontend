import React from "react";
import NavBar from "../../components/navBar/NavBar.jsx";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./favoritePage.css";
import {getFavorites} from '../../services/favorites.js';


function FavoritePage(props) {
  const navigate = useNavigate();
  const { user } = props;

  const [userInfo, setUserInfo] = useState(user);

  useEffect(() => {
    // Redirect to login page if user is not authenticated
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  useEffect(() => {
    setUserInfo(user);
    
  }, [user]);

  return (
    user != null && (
      <>
        {/* <NavBar showSearch="noShow"/> */}
        <div>
          <h1>{`Welcome ${user.name} to your favorites!`}</h1>
        </div>
      </>
    )
  );
  //   if (!userInfo) {
  //     return (
  //       <div>
  //         <h1>You must be Sign In to view your favorites</h1>
  //         <Link to={"/login"}>Sign In Here</Link>
  //       </div>
  //     );
  //   }

  //   console.log(user);

  //   return (
  //     <>
  //       {/* <NavBar showSearch="noShow"/> */}
  //       <div>
  //         <h1>{`Welcome ${user.name} to your favorites!`}</h1>
  //       </div>
  //     </>
  //   );
  
}

export default FavoritePage;
