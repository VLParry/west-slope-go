import React, { useEffect, useState } from "react";
import Home from "./components/Home";
// import SignUpForm from "./components/SignUpForm";
import Login from "./pages/Login"
import NavBar from "./components/NavBar";
import Activities from "./components/Activities";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import CreateActivity from "./components/CreateActivity";


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
// //empty dependency array only loads on the first time

if (!user) return <Login onLogin={setUser} />


  return (
    <div className="App">
     
      <Router>
      <NavBar 
      setUser={setUser} user={user}
      />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUpForm />}/> */}
          <Route path="/activities" element={<Activities user={user} />} />
          <Route path="/createActivity" element={<CreateActivity  />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
