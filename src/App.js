// src/App.js
import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from './firebase';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Animals from './components/Animals';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/style.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  };

  return (
    <div>
      <Header user={user} onSignIn={handleSignIn} onSignOut={handleSignOut} />
      <Home />
      <About />
      <Gallery />
      <Animals />
      <Banner />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
