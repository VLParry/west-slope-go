import React, { useState } from 'react'


const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email) 
    }

  return (
    <div className='auth-form-container'>
    <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input 
        type="email" 
        placeholder="enter your email" 
        id="email" 
        value={email}
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input 
        type="password" 
        placeholder="enter password" 
        id="password" 
        value={password}
        name="password" 
        onChange={(e) => setPassword(e.target.value)}
        />
        <button>Sign In!</button>
        </form>
        <button>Don't have an account? Create one here!</button>
        </div>
  )
}

export default LoginForm
