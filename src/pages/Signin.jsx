import { Link } from 'react-router-dom'
import './Signin.css'
const Signin = () => {
  return (
    <div className='signin'>
      <div className='signin-box'><h1>Login</h1>
      <form>
        <div className='form-div'>
        <div className='label'>
        <label htmlFor="username">Username:</label>
        <input type="username" name='username'/>
        </div>
        <div className='label'>
        <label htmlFor="password">Password:</label>
        <input type="password" name='password'/>
        </div>
        <button className='btn'>Sign In</button>
        </div>
      </form>
      <Link className='link' to={'/signup'}>New User? Register Here</Link></div>
    </div>
  )
}

export default Signin
