import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar.jsx";
import "./profilePage.css";
import { Link } from "react-router-dom";
import { signOut } from "../../services/users.js";

function ProfilePage(props) {
  const navigate = useNavigate();

  const { user, setUser } = props;

  const [userProfile, setUserProfile] = useState(user);

  useEffect(() => {
    // Redirect to login page if user is not authenticated
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  // Update local state if the user prop changes
  useEffect(() => {
    setUserProfile(user);
  }, [user]);

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  const onLogout = async () => {
    try {
      await signOut(); // Call signOut to remove the token
      setUser(null);
      navigate("/login"); // Navigate to login or any other appropriate path after logout
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

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
        <button onClick={onLogout}>Logout</button>
      </div>
    </>
  );
}

export default ProfilePage;
