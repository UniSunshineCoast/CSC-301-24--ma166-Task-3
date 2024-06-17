import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

// Home component - the main landing page for the E-commerce app
const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h2>Welcome to My E-commerce App!</h2>
          <p>Discover the latest trends and exclusive deals.</p>
          <Link to="/products">
            <button className="cta-button" type="button">Explore Products</button>
          </Link>
        </div>
      </section>

      <section className="promotions">
        <h3>Special Offers</h3>
        <div className="promotion-banners">
          <div className="promotion-banner">
            <img src="https://rukminim2.flixcart.com/fk-p-flap/220/230/image/2949fa82bae2c2e4.jpg?q=90" alt="Promotion Banner 1" />
            <div className="promotion-details">
              <h4>Summer Sale</h4>
              <p>Up to 50% off on selected items!</p>
              <Link to="/products">Shop Now</Link>
            </div>
          </div>

          <div className="promotion-banner">
            <img src="https://rukminim2.flixcart.com/fk-p-flap/220/230/image/2949fa82bae2c2e4.jpg?q=90" alt="Promotion Banner 2" />
            <div className="promotion-details">
              <h4>New Arrivals</h4>
              <p>Explore our latest collection.</p>
              <Link to="/products">View New Arrivals</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
