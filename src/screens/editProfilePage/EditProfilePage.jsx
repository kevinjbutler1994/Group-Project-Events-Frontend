import { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar.jsx";
import { verify, editUser } from "../../services/users.js";
import "./editProfilePage.css";

function EditProfilePage(props) {
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
  }, []);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onProfileUpdate = async (event) => {
    event.preventDefault();
    try {
      const editedUser = await editUser({ ...form });
      setUser(editedUser); // Update user context
    } catch (error) {
      console.error("Error editing user:", error);
    }
  };

  const onProfileDelete = () => {};

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
        <button>Cancel</button>
      </div>
    </>
  );
}

export default EditProfilePage;