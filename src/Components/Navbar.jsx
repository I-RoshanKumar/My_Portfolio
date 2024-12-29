
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-brand">MyBrand</a>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
         <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact Us</a></li> 
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
