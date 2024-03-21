import { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar.jsx";
import { verify, editUser, deleteUser } from "../../services/users.js";
import "./editProfilePage.css";
import { useNavigate } from "react-router-dom";

function EditProfilePage(props) {
  const navigate = useNavigate();

  const { setUser } = props;

  let [form, setForm] = useState({
    name: "",
    email: "",
    isError: false,
    errorMsg: "",
  });

  useEffect(() => {
    const userData = async () => {
      const user = await verify();
      if (user) {
        setForm({ name: user.name, email: user.email });
      }
    };
    userData();
  }, [setUser]);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onProfileUpdate = async (event) => {
    event.preventDefault();
    try {
      const { user, token } = await editUser(form);
      localStorage.setItem("token", token); // Update the stored token
      setUser(user);
      navigate("/profile");
    } catch (error) {
      console.error("Error editing user:", error);
    }
  };

  const onProfileDelete = async () => {
    await deleteUser();
    localStorage.removeItem("token"); // Clear the token from local storage
    setUser(null); // Clear the user state to reflect that the user is logged out
    navigate("/login"); // Redirect to login or home page
  };

  const onProfileCancel = () => {
    navigate("/profile");
  };

  const { name, email } = form;

  return (
    <>
      {/* <NavBar showSearch="noShow" /> */}
      <div className="editContainer">
        <h1>Profile Page</h1>
        <form>
          <label htmlFor="editName">Name</label>
          <input
            id="editName"
            type="text"
            placeholder="Edit Name"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <label htmlFor="editEmail">Email</label>
          <input
            id="editEmail"
            type="email"
            placeholder="Edit Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <button type="button" onClick={onProfileUpdate}>
            Edit
          </button>
          <button type="button" onClick={onProfileDelete}>
            Delete
          </button>
        </form>
        <button onClick={onProfileCancel}>Cancel</button>
      </div>
    </>
  );
}
export default EditProfilePage;
