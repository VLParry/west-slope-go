import React, { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
// import App from '../App.css';


function App() {
  const [currentForm, setCurrentForm] = useState('login')
  return (
    <div className="App">
      <h1>WestSlopeGo</h1>

      <SignUpForm />

      <LoginForm />
      {/* {
      currentForm === "login" ? <LoginForm /> : <SignUpForm />
} */}
    </div>
  );
}

export default App;
