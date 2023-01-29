import React, { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import App from '../App.css';


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

if (!user) return <LoginForm onLogin={setUser} />

  return (
    <div className="App">
      <h1>WestSlopeGo</h1>

      <SignUpForm />

      {/* {
      currentForm === "login" ? <LoginForm /> : <SignUpForm />
} */}
    </div>
  );
}

export default App;
