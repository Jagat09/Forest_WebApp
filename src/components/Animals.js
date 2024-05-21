import React from 'react';

const Animals = () => (
  <section className="animal" id="animal">
    <h2 className="heading">animals</h2>
    <div className="box-container">
      <div className="box">
        <img src="./images/animal_1.jpg" alt="" />
        <div className="content">
          <h3>leopard</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="box">
        <img src="/images/animals_2.jpg" alt="" />
        <div className="content">
          <h3>tiger</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="box">
        <img src="/images/animals_3.jpg" alt="" />
        <div className="content">
          <h3>zebra</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="box">
        <img src="/images/animals_4.jpg" alt="" />
        <div className="content">
          <h3>lion</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Animals;
