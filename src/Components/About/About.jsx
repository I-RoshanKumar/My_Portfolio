import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
        <p>
          Welcome to [Your Brand]! We are dedicated to providing the best services and experiences for our customers.
        </p>
      </header>
      <section className="about-content">
        <h2>Our Mission</h2>
        <p>
          Our mission is to deliver exceptional value through innovation, quality, and commitment to excellence. 
          We aim to create solutions that empower our customers and make their lives better.
        </p>

        <h2>Our Vision</h2>
        <p>
          We envision a world where technology and creativity come together to solve complex challenges 
          and bring positive change to society.
        </p>

        <h2>Meet the Team</h2>
        <p>
          Our team consists of passionate professionals with diverse expertise. Together, we work tirelessly to achieve our goals 
          and fulfill the promises we make to our clients.
        </p>
      </section>
    </div>
  );
}

export default About;
