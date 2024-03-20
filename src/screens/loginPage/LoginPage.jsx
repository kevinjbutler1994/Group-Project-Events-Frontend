import React from 'react'

function LoginPage() {
  return (
    <div>
   <h1>Log in</h1>
   <form onSubmit={handleSubmit}>
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
  )
}

export default LoginPage