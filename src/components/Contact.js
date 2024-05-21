import React from 'react';

const Contact = () => (
  <section className="contact" id="contact">
    <h2 className="heading">contact us</h2>
    <div className="row">
      <iframe title="google-map" className="map" src="https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1svan+vihar+shyamla+hills!6i13!3m1!1sen!5m1!1sen"></iframe>
      <form action="">
        <h3>get in touch</h3>
        <input type="text" placeholder="your name" className="box" />
        <input type="email" placeholder="your email" className="box" />
        <input type="number" placeholder="your number" className="box" />
        <textarea placeholder="your message" className="box" cols="30" rows="10"></textarea>
        <input type="submit" value="send message" className="btn" />
      </form>
    </div>
  </section>
);

export default Contact;
