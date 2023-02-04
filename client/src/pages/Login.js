import {useState} from 'react'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'


const Login = ({onLogin}) => {
    const [showLogin, setShowLogin] = useState(true)

  return (
    <div className='App'>
      <h1>West Slope Go!</h1>
      <h2>A list of activities for both kids and adults happening on the Western Slope</h2>
      <h3>Whether it's a major event or just a playground playdate, find it here!</h3>
      
        {showLogin ? <> <LoginForm onLogin={onLogin} />Don't have an account?<button className='btn' onClick={() => {setShowLogin(false)}}>Create one here!</button></> : <>
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
