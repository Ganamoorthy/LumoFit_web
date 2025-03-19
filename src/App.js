import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostureModel from "./PostureModel";
import BuyNow from "./BuyNow"; // Ensure this import matches the component name
import {
  faHeartbeat,
  faMicrophone,
  faMapMarkerAlt,
  faComments,
  faMobileAlt,
  faBatteryFull,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <div className="logo">Lumo Fit</div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/buy-now">Buy Now</Link>
          <a href="#features">Features</a>
          <a href="#benefits">Benefits</a>
          <a href="#technology">Technology</a>
          <a href="#pricing">Pricing</a>
        </nav>
      </header>

      {/* Routes Section */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy-now" element={<BuyNow />} /> {/* Ensure this matches the component name */}
      </Routes>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>PostureGuard</h3>
            <p>
              Innovative posture correction technology for a healthier
              lifestyle.
            </p>
          </div>
          <div className="footer-section">
            <h4>Product</h4>
            <ul>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li>
                <Link to="/buy-now">Buy Now</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 PostureGuard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Home Component
function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="logo">
            <img src="/new11.png" alt="PostureGuard Logo" />
          </div>
          <h1>Smart Posture Correction for Modern Life</h1>
          <p>
            Advanced wearable technology that monitors your posture while
            tracking vital health metrics in real-time.
          </p>
          <div className="hero-buttons"></div>
        </div>

        {/* 3D Model on the right */}
        <div className="hero-3d">
          <PostureModel />
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <h2>Smart Features for Better Health</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <FontAwesomeIcon icon={faHeartbeat} className="feature-icon" />
            <h3>Heart Rate Monitor</h3>
            <p>Continuous heart rate tracking</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faMicrophone} className="feature-icon" />
            <h3>Voice Communication</h3>
            <p>Real-time body temperature</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="feature-icon" />
            <h3>Location Tracking</h3>
            <p>Location tracking for safety</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faComments} className="feature-icon" />
            <h3>Built-in Communication</h3>
            <p>Built-in communication system</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits" id="benefits">
        <h2>The Benefits of the device</h2>
      </section>

      {/* Technology Section */}
      <section className="technology" id="technology">
        <h2>Advanced Technology for Better Posture</h2>
        <div className="tech-grid">
          <div className="tech-item">
            <FontAwesomeIcon icon={faMobileAlt} className="tech-icon" />
            <h3>Smart App Integration</h3>
            <p>Connect to our mobile app for real-time tracking and insights</p>
          </div>
          <div className="tech-item">
            <FontAwesomeIcon icon={faBatteryFull} className="tech-icon" />
            <h3>Long Battery Life</h3>
            <p>Up to 7 days of continuous use on a single charge</p>
          </div>
          <div className="tech-item">
            <FontAwesomeIcon icon={faCloud} className="tech-icon" />
            <h3>Cloud Sync</h3>
            <p>Automatic data synchronization and backup</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing" id="pricing">
        <h2>Choose Your Plan</h2>
        <div className="pricing-grid">
          {/* Silver Plan */}
          <div className="pricing-card">
            <h3>Silver</h3>
            <p className="price">$89</p>
            <ul>
              <li>
                <span className="check">✔</span> Basic Posture Monitoring
              </li>
              <li>
                <span className="check">✔</span> Heart Rate Tracking
              </li>
              <li>
                <span className="check">✔</span> GPS Tracking
              </li>
              <li>
                <span className="check">✔</span> Voice Communication
              </li>
              <li>
                <span className="check">✔</span> Standard App Features
              </li>
            </ul>
            <button className="choose-plan">Choose Plan</button>
          </div>

          {/* Gold Plan (Popular) */}
          <div className="pricing-card popular">
            <h3>Gold</h3>
            <p className="price">$149</p>
            <ul>
              <li>
                <span className="check">✔</span> All Silver Features
              </li>
              <li>
                <span className="check">✔</span> Free trial for 1 month to use Premium 
              </li>
              <li>
                <span className="check">✔</span> Buy 2 Gold plan 10% offer  
              </li>
              <li>
                <span className="check">✔</span> 1 month Warranty
              </li>
              <li>
                <span className="cross">✘</span> No Priority Support
              </li>
            </ul>
            <button className="choose-plan popular">Choose Plan</button>
          </div>

          {/* Diamond Plan */}
          <div className="pricing-card">
            <h3>Diamond</h3>
            <p className="price">$199</p>
            <ul>
              <li>
                <span className="check">✔</span> All Gold Features
              </li>
              <li>
                <span className="check">✔</span> Costomizable Device 
              </li>
              <li>
                <span className="check">✔</span> 6 month Warranty
              </li>
              <li>
                <span className="check">✔</span> High quality sensors 
              </li>
              <li>
                <span className="check">✔</span> Premium Design
              </li>
            </ul>
            <button className="choose-plan">Choose Plan</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;