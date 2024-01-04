import React from "react";
import classes from './Signup.module.css';
import ToggleBtn from "./ToggleBtn";
const Sighnup = () => {
  return (
    <>
      <div className={classes.signup}>
        <h1>Sign up</h1>
        <form>
          <input type='text' placeholder='Your Name' />
          <input type='email' placeholder='Email Address' />
          <input type='password' placeholder='Password' />
          <input type='submit' value='Continue' />
        </form>
        <div className={classes.btn_login}>
          <p>
            already have an account?<ToggleBtn value='login'/>here
          </p>
        </div>
        <div className={classes.check}>
          <input type='checkbox' />
          <p>by continuing i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </>
  );
};

export default Sighnup;
