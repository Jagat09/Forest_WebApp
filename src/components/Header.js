import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import '../styles/style.css';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

const Header = ({ user, onSignIn, onSignOut }) => {

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <header className="header">
      <a href="#" className="logo">
        <i className="fas fa-paw"></i> zoo
      </a>
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#gallery">Gallery</a>
        <a href="#animal">Animal</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="icons">
        <div id="login-btn" className="fas fa-user" onClick={user ? onSignOut : handleSignIn}></div>
        <div id="menu-btn" className="fas fa-bars"></div>
      </div>
      <form className="login-form">
        <h3>Login Form</h3>
        {user ? (
          <>
            <p>Welcome, {user.displayName}</p>
            <button type="button" className="btn" onClick={onSignOut}>Logout</button>
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
