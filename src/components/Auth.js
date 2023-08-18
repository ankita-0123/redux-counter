import React from 'react'
import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/AuthSlice';
const Auth = () => {
    const dispatch = useDispatch();
    const loginHandler =(event)=>{
        event.preventDefault();
        dispatch(authActions.login());
    }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'><strong>Email</strong></label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'><strong>Password</strong></label>
            <input type='password' id='password' />
          </div>
          <button >Login</button>
        </form>
      </section>
    </main>
  )
}

export default Auth
