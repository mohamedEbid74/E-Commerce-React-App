import React from 'react'
import classes from './Subscribe.module.css';
const Subscribe = () => {
  return (
    <>
      <section className={classes.subscribe}>
        <div className={classes.subscribe_box}>
          <h1>get exclusive ofers on your email</h1>
          <p>Subscribe to our newletter and stay updated</p>
          <div className={classes.subscribe_form}>
            <input type='email' placeholder='Your Email Id'/>
            <button>Subscribe</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Subscribe
