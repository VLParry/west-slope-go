import React, { useState } from 'react'


const LoginForm = ({onLogin}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([])

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(e) 
      fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json",},
        body: JSON.stringify({ email, password}),
      })
      .then((r) => {
        if (r.ok) {
          setErrors([])
          r.json().then((user) => onLogin(user));
        }
        else{
          r.json().then((err) => setErrors(err.errors));
        }
      })
  }

  return (
    <div className='auth-form-container'>
    <form className="login-form" onSubmit={handleSubmit}>
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
        <button className='btn'>Sign In!</button>
      
          {errors.map((err) => (
            <p key={err} style={{ color: "red" }}>{err}</p>
          ))}
         
        </form>
   
        </div>
  )
}

export default LoginForm
