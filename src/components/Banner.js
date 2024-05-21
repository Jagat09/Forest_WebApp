import React from 'react';
import "../styles/style.css"
const Banner = () => (
  <section className="banner">
    <div className="box-container">
      <div className="box">
        <img src="images/banner_1.png" alt="" />
        <div className="content">
          <h3>special offer</h3>
          <p>upto 45% off</p>
          <a href="#" className="btn">check out</a>
        </div>
      </div>
      <div className="box">
        <img src="images/banner_2.png" alt="" />
        <div className="content">
          <h3>special offer</h3>
          <p>upto 60% off</p>
          <a href="#" className="btn">check out</a>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
