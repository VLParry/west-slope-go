import {useState} from 'react'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'

const Login = ({onLogin}) => {
    const [showLogin, setShowLogin] = useState(true)

  return (
    <div>
      {/* {showLogin ? (
        <>
        <LoginForm onLogin={onLogin} />
        
      )} */}
    </div>
  )
}

export default Login
