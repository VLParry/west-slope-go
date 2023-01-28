import React, { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";


function App() {
  return (
    <div className="App">
      <h1>WestSlopeGo</h1>
      <SignUpForm />
      <LoginForm />
    </div>
  );
}

export default App;
