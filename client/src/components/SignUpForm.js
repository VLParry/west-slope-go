import React, { useState } from 'react'

const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation]= useState("");
    const [name, setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email) 
    }
    return (
    <form onSubmit={handleSubmit}>
        <label for="email">Email:</label>
        <input 
        type="email" 
        placeholder="add your email" 
        id="email" 
        value={email}
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        />
        <label for="password">Password:</label>
        <input 
        type="password" 
        placeholder="create password" 
        id="password" 
        value={password}
        name="password" 
        onChange={(e) => setPassword(e.target.value)}
        />
        <label for="password_conf">Password confirmation:</label>
        <input 
        type="password_conf" 
        placeholder="confirm email" 
        id="password_conf" 
        value={passwordConfirmation}
        name="password_conf" 
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <label for="name">Your name:</label>
        <input 
        type="name" 
        placeholder="your name here" 
        id="name" 
        value={name}
        name="name" 
        onChange={(e) => setName(e.target.value)}
        />
        <button>Create User</button>
    </form>
  )
}

export default SignUpForm
