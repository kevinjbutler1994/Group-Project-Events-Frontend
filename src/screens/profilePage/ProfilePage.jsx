import { useState, useEffect } from "react";
import NavBar from "../../components/navBar/NavBar.jsx";
import "./profilePage.css";
import { Link } from "react-router-dom";

function ProfilePage(props) {
  const { user } = props;

  const [userProfile, setUserProfile] = useState(user);

  // Update local state if the user prop changes
  useEffect(() => {
    setUserProfile(user);
  }, [user]);

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* <NavBar showSearch="noShow" /> */}
      <div>
        <img
          className="profileLogo"
          src="http://pluspng.com/img-png/user-png-icon-big-image-png-2240.png"
          alt="userLogo"
        />
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <Link to={"/edit"}>Edit</Link>
      </div>
    </>
  );
}

export default ProfilePage;
