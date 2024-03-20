import React from 'react';
import NavBar from "../../components/navBar/NavBar.jsx";
import "./loginPage.css";

function LoginPage() {
  let [login, setLogin] = useState({
    email: "",
    password: "",
   
  })
 
  const handleChange = (login) => {
    let value = login.target.value;
    let name = login.target;
 
    setSignup((prevalue) => {
      return {
        ...prevalue,                 
    
      }
    })
  }
  return (
  <>
  <NavBar showSearch="noShow"/>
  <div>
   <h1>Log in</h1>
   <form >
          <input
         type="text"
         placeholder="Type your email"
         onChange={handleChange}
        />
        
        <input
        type="text"
        placeholder="Type your pasword"
        onChange={handleChange}
        />
      </form>
    </div>
    </>
  )
}

export default LoginPage