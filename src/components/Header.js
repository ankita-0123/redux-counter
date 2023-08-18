import React from 'react';
import classes from './Header.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/AuthSlice';
import './Header.module.css';
const Header = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(state=>state.auth.isAuthenticated);
    const logoutHandler = () => {
        dispatch(authActions.logout());
    };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
    {isAuth &&<nav>
        <ul>
        <button className={`${classes.logoutButton} ${classes.navButton}`} onClick={logoutHandler}>
  Logout
</button>
        </ul>
      </nav>}
    </header>
  )
}

export default Header;
