import React from "react";
import Signup from '../Components/Form/Sighnup';
import classes from './css/LogInSignUp.module.css';
import Login from "../Components/Form/Login";
import {useSelector } from 'react-redux';

const LogInSignUp = () => {
  const isLoged = useSelector(state => state.form.isLogIn);
  console.log(isLoged)
  return <>
    <section className={classes.form}>
      <div className={classes.card}>
        {!isLoged && <Signup />}
        {isLoged && <Login />}
      </div>
    </section>
  </>;
};

export default LogInSignUp;
