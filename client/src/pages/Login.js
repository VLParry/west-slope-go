import {useState} from 'react'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'


const Login = ({onLogin}) => {
    const [showLogin, setShowLogin] = useState(true)

  return (
    <div className='App'>
      <h1>West Slope Go</h1>
      
        {showLogin ? <> <LoginForm onLogin={onLogin} />  <button onClick={() => {setShowLogin(false)}}>Don't have an account? Create one here!</button></> : <>
        <SignUpForm onLogin={onLogin}/><p>
            Already have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p></>}
        
        
      
    </div>
  )
}

export default Login
