import React from 'react';

const About = () => (
  <section className="about" id="about">
    <h2 className="deco-title">About us</h2>
    <div className="box-container">
      <div className="image">
        <img src="images/about.png" alt="" />
      </div>
      <div className="content">
        <h3 className="title">you can find all the most popular species</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt temporibus ipsum consectetur asperiores modi ratione. Sit, dolores voluptas consequuntur dolor tempore quibusdam est obcaecati possimus omnis, officiis molestias et sapiente.</p>
        <div className="icons-container">
          <div className="icons">
            <i className="fas fa-graduation-cap"></i>
            <h3>we educate</h3>
          </div>
          <div className="icons">
            <i className="fas fa-bullhorn"></i>
            <h3>we play</h3>
          </div>
          <div className="icons">
            <i className="fas fa-book-open"></i>
            <h3>getting to know</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
