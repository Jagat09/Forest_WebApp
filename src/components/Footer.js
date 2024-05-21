import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="box-container">
      <div className="box">
        <h3>quick links</h3>
        <a href="#home"> <i className="fas fa-chevron-right"></i> home </a>
        <a href="#about"> <i className="fas fa-chevron-right"></i> about </a>
        <a href="#gallery"> <i className="fas fa-chevron-right"></i> gallery </a>
        <a href="#animal"> <i className="fas fa-chevron-right"></i> animal </a>
        <a href="#contact"> <i className="fas fa-chevron-right"></i> contact </a>
      </div>
      <div className="box">
        <h3>our services</h3>
        <a href="#"> <i className="fas fa-chevron-right"></i> food & drinks </a>
        <a href="#"> <i className="fas fa-chevron-right"></i> our plans </a>
        <a href="#"> <i className="fas fa-chevron-right"></i> training </a>
        <a href="#"> <i className="fas fa-chevron-right"></i> vaccinations </a>
        <a href="#"> <i className="fas fa-chevron-right"></i> pet care </a>
      </div>
      <div className="box">
        <h3>follow us</h3>
        <a href="#"> <i className="fab fa-facebook-f"></i> facebook </a>
        <a href="#"> <i className="fab fa-twitter"></i> twitter </a>
        <a href="#"> <i className="fab fa-instagram"></i> instagram </a>
        <a href="#"> <i className="fab fa-linkedin"></i> linkedin </a>
        <a href="#"> <i className="fab fa-pinterest"></i> pinterest </a>
      </div>
    </div>
    <div className="credit"> created by <span>Team 21</span> | all rights reserved! </div>
  </footer>
);

export default Footer;
