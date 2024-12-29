
import './Home.css';

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Our Website</h1>
        <p>Your journey starts here. Discover more with us.</p>
        <button className="home-button">Get Started</button>
      </header>

      <section className="home-content">
        <div className="home-card">
          <h2>About Us</h2>
          <p>
            Learn more about our mission, vision, and values. We aim to provide
            the best experience for our users.
          </p>
        </div>
        <div className="home-card">
          <h2>Our Services</h2>
          <p>
            Explore the wide range of services we offer, tailored to meet your
            needs.
          </p>
        </div>
        <div className="home-card">
          <h2>Contact Us</h2>
          <p>
            Have any questions? Reach out to our support team for assistance.
          </p>
        </div>
       
      </section>
    </div>
  );
}

export default Home;
