import React from "react";
import { useState } from "react";
import { signUp } from "../../services/users.js";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar.jsx";
import "./signUpPage.css";
//import { eventWrapper } from "@testing-library/user-event/dist/utils/index.js";

function RegisterPage(props) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "", //will be field where they have to retype their password
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

  const onSignUp = async (event) => {
    event.preventDefault();
    // Check if the password is at least 6 characters long
    if (form.password.length < 6) {
      setForm({
        ...form,
        isError: true,
        errorMsg: "Password must be at least 6 characters long",
      });
      return; // Stop the function here if the password is too short
    }

    // Check if the password and confirmation match
    if (form.password !== form.passwordConfirmation) {
      setForm({
        ...form,
        isError: true,
        errorMsg: "Passwords do not match",
      });
      return; // Stop the function here if the passwords don't match
    }

    const { setUser } = props;

    try {
      const user = await signUp(form);
      setUser(user);
      navigate("/profile");
    } catch (error) {
      console.error(error);
      setForm({
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        isError: true,
        errorMsg: "Sign Up Details Invalid",
      });
    }
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return (
        <button className="submitButton" type="submit">
          Submit
        </button>
      );
    }
  };

  const { name, email, password, passwordConfirmation } = form;

  return (
    <>
      <NavBar showSearch="noShow" />
      <div className="signUpContainer">
        <h1>Sign up</h1>
        <form onSubmit={onSignUp}>
          <label htmlFor="signUpName">Name:</label>
          <input
            id="signUpName"
            type="text"
            placeholder="Type your name "
            name="name"
            value={name}
            onChange={handleChange}
          />
          <label htmlFor="signUpEmail">Email: </label>
          <input
            id="signUpEmail"
            type="email"
            placeholder="Type your email"
            name="email"
            value={email}
            onChange={handleChange}
          />

          <label htmlFor="signUpPassword">Password: </label>
          <input
            id="signUpPassword"
            type="password"
            placeholder="Create password"
            name="password"
            value={password}
            onChange={handleChange}
          />

          <label htmlFor="signUpPasswordConfirmation">Confirm Password</label>
          <input
            id="signUpPasswordConfirmation"
            type="password"
            placeholder="Confirm pasword"
            name="passwordConfirmation"
            value={passwordConfirmation}
            onChange={handleChange}
          />

          {renderError()}
        </form>
        <p>
          Already have an account? <Link to={"/login"}>Login Here</Link>
        </p>
      </div>
    </>
  );
}

export default RegisterPage;
