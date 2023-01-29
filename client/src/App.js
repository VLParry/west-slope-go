import React, { useEffect, useState } from "react";
import LoginForm from "./components/LoginForm";
import Login from "./pages/Login"
import SignUpForm from "./components/SignUpForm";
import NavBar from "./components/NavBar";
import Activities from "./components/Activities";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  const [user, setUser] = useState(null)
  //autoLogin : ensures our user ID is saved to sessions.
  useEffect(() => {
  fetch("/auth")
    .then((r) => {
    if (r.ok) {
      r.json().then((user) => setUser(user));
    }
  });
},[]);

if (!user) return <Login onLogin={setUser} />



  return (
    <div className="App">
      <NavBar />
      <h1>WestSlopeGo</h1>

      <SignUpForm />
      <Activities />

      {/* {
      currentForm === "login" ? <LoginForm /> : <SignUpForm />
} */}
    </div>
  );
}

export default App;
