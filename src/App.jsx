import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/HomePage/Home';
import About from './Components/About/about';
// import Services from './Components/Services/Services';
// import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      {/* 
      <section id="services">
        <Services />
      </section>
      <section id="contact">
        <Contact />
      </section> 
      */}
    </div>
  );
}

export default App;
