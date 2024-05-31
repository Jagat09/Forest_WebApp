import React from 'react';
import { auth } from '../firebase';
import '../styles/style.css';

const Header = ({ user, onSignIn, onSignOut }) => {

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await onSignIn();
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      await onSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <header className="header">
      <a href="#" className="logo">
        <i className="fas fa-paw"></i> Animalia
      </a>
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#gallery">Gallery</a>
        <a href="#animal">Animal</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="icons">
        {user && <span className="user-name">Welcome, {user.displayName}</span>}
        <div id="login-btn" className="fas fa-user" onClick={user ? handleSignOut : handleSignIn}></div>
        <div id="menu-btn" className="fas fa-bars"></div>
      </div>
      <form className="login-form">
        <h3>Login Form</h3>
        {user ? (
          <>
            <p>Welcome, {user.displayName}</p>
            <button type="button" className="btn" onClick={handleSignOut}>Logout</button>
          </>
        ) : (
          <>
            <input type="email" placeholder="Enter your email" className="box" />
            <input type="password" placeholder="Enter your password" className="box" />
            <div className="remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="button" className="btn" onClick={handleSignIn}>Login with Google</button>
          </>
        )}
      </form>
    </header>
  );
};

export default Header;
