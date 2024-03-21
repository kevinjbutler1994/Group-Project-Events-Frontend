import React from "react";
import { useState } from "react";
import NavBar from "../../components/navBar/NavBar.jsx";
import { Link } from "react-router-dom";
import { login } from "../../services/users.js";
import { useNavigate } from "react-router-dom";

import "./loginPage.css";

function LoginPage(props) {
  let navigate = useNavigate();

  let [form, setForm] = useState({
    email: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSignIn = async (event) => {
    event.preventDefault();
    const { setUser } = props;
    try {
      const user = await login(form);
      setForm(user);
      setUser(user);
      navigate("/");
    } catch (error) {
      console.error(error);
      setForm({
        isError: true,
        errorMsg: "Invalid Credentials",
        email: "",
        password: "",
      });
    }
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={`${toggleForm} submitButton`}>
          {form.errorMsg}
        </button>
      );
    } else {
      return (
        <button type="submit" className="submitButton">
          Sign In
        </button>
      );
    }
  };

  const { email, password } = form;

  return (
    <>
      {/* <NavBar showSearch="noShow" /> */}
      <div className="loginContainer">
        <h1>Log in</h1>
        <form className="loginForm" onSubmit={onSignIn}>
          <label htmlFor="authEmail">Email: </label>
          <input
            id="authEmail"
            type="text"
            placeholder="Type your email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <label htmlFor="authPassword">Password: </label>
          <input
            id="authPassword"
            name="password"
            type="password"
            value={password}
            placeholder="Type your pasword"
            onChange={handleChange}
          />
          {renderError()}
        </form>
        <p>
          Dont have an account? <Link to={"/signup"}>Register Here</Link>
        </p>
      </div>
    </>
  );
}

export default LoginPage;
