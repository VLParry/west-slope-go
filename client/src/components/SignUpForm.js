import React, { useState } from 'react'


const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation]= useState("");
    const [name, setName] = useState("")
    const [errors, setErrors] = useState([])

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email,
            password,
            password_confirmation: passwordConfirmation,
            name
        }
        fetch ('/signup', {
            method: "POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(user)
        })
        .then((r) => {
          setErrors([])

            if (r.ok) {
              // nav('/')
            }
            else{
              r.json().then((err) => setErrors(err.errors));
            }
          })
        
    }
    return (
        <div className='auth-form-container'>
    <form className="signup-form"onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input 
        type="email" 
        placeholder="add your email" 
        id="email" 
        value={email}
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input 
        type="password" 
        placeholder="create password" 
        id="password" 
        value={password}
        name="password" 
        onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password">Password confirmation:</label>
        <input 
        type="password" 
        placeholder="confirm password" 
        id="password_confirmation" 
        value={passwordConfirmation}
        name="password_confirmation" 
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <label htmlFor="name">Your name:</label>
        <input 
        type="name" 
        placeholder="your name here" 
        id="name" 
        value={name}
        name="name" 
        onChange={(e) => setName(e.target.value)}
        />
        <button className='btn' >Create Account</button>
        {errors.map((err) => (
            <p key={err} style={{ color: "red" }}>{err}</p>
          ))}
    </form>
 
    </div>
  )
}

export default SignUpForm
