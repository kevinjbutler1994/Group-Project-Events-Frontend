import React from 'react'
import { useState } from 'react'

function RegisterPage() {
  let [signup, setSignup] = useState({
    name: "",
    email: "",
    password: "",
    confirm:"",
  })
 
  const handleChange = (signup) => {
    let value = signup.target.value;
    let name = signup.target.name;
 
    setSignup((prevalue) => {
      return {
        ...prevalue,                 
        [name]: value
      }
    })
  }
  return (
    <div>
   <h1>Sign up</h1>
   <form >
        <input
          type="text"
          placeholder="Type your name "
          name="name"
          onChange={handleChange}
          />
          <input
         type="text"
         placeholder="Type your email"
         name="email"
         onChange={handleChange}
        />

       <input 
        type="text"
        placeholder="Create password"
        name="password"
        onChange={handleChange}
        />
        <input
        type="text"
        placeholder="Confirm pasword"
        name="confirm"
        onChange={handleChange}
        />
      </form>
 </div>



  )
  }

export default RegisterPage;