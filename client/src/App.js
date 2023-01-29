import React, { useEffect, useState } from "react";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import Login from "./pages/Login"
import SignUpForm from "./components/SignUpForm";
import NavBar from "./components/NavBar";
// import Activities from "./components/Activities";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  const [user, setUser] = useState(null)
  // const [activities, setActivities] = useState=([])
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

// useEffect(() => {
//   fetch("/activities")
//     .then((r) => r.json())
//     .then(setActivities);
// }, []);

  return (
    <div className="App">
      <NavBar />
      <h1>WestSlopeGo</h1>

      <SignUpForm />
      <Home />
      {/* <ul> */}
        {/* {activities.map((activity) => (
          <li key={activity.id}>
            {activity.name}
          </li>
        ))}
      </ul> */}

      {/* {
      currentForm === "login" ? <LoginForm /> : <SignUpForm />
} */}
    </div>
  );
}

export default App;
