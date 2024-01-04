import React from 'react'
import classes from './Login.module.css';
import ToggleBtn from './ToggleBtn';

const Login = () => {
  return (
    <>
    <div className={classes.login}>
        <h1>log in</h1>
        <form>
          <input type='email' placeholder='Email Address' />
          <input type='password' placeholder='Password' />
          <input type='submit' value='Log in' />
        </form>
        <div className={classes.btn_signup}>
          <p>
            don't have an account?<ToggleBtn value='signup'/>here
          </p>
        </div>
      </div>
    </>
  )
}

export default Login
