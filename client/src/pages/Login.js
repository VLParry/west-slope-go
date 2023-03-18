import {useState} from 'react'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'

const Login = ({onLogin}) => {
    const [showLogin, setShowLogin] = useState(true)

  return (
    <div className='App'>
      <h1>West Slope Go!</h1>
      <h2>A list of activities happening on the Western Slope</h2>
      <h3>Whether it's a major event or just a playground playdate, find or list it here!</h3>
      
        {showLogin ? <> <LoginForm onLogin={onLogin} /><p>Don't have an account? &nbsp; <button className='btn' onClick={() => {setShowLogin(false)}}>Create one here!</button></p></> : <>
        <SignUpForm onLogin={onLogin}/><p>
            Already have an account? &nbsp;
            <button className='btn' onClick={() => setShowLogin(true)}>
              Sign In
            </button>
          </p></>}
    </div>
  )
}

export default Login
