import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Login from "./pages/Login"
import NavBar from "./components/NavBar";
import Activities from "./components/Activities";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
     
      <Router>
      <NavBar setUser={setUser}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
