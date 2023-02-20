import React, { useEffect, useState } from "react";
import Home from "./components/Home";
// import SignUpForm from "./components/SignUpForm";
import Login from "./pages/Login"
import NavBar from "./components/NavBar";
import Activities from "./components/Activities";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import CreateActivity from "./components/CreateActivity";
import UserActivities from "./components/UserActivities";
import { useUserContext } from "./context/UserContext";


//its a better user experience that it will navigate you to the route you selected after you log in

function App() {
  const {setUser, user} = useUserContext()
  //autoLogin : ensures our user ID is saved to sessions.
  const [activities, setActivities] = useState([]);

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

const handleAddActivity = (newActivity) => {
  setActivities([...activities, newActivity])

}
  return (
    <div className="App">
     
      <Router>
      <NavBar />
      <div className="App__main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities activities={activities} setActivities={setActivities} />} />
          <Route path="/createActivity" element={<CreateActivity  handleAddActivity={handleAddActivity}/>} />
          <Route path="/myActivities" element={<UserActivities  />} />
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
