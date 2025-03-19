import React, { useState } from 'react';
import './BuyNow.css';

const BuyNow = () => {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('blue');

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="store-container">

      <main className="main-content">
        <div className="product-page">
          <div className="product-images">
            <div className="main-image">
              <img 
                src={`/images/11.png`} 
                alt="Premium Wireless Headphones" 
              />
            </div>
            <div className="thumbnail-images">
              <img src="/images/11.png" alt="Model" onClick={() => setColor('gray')} />
              <img src="/images/22.png" alt="Logo" onClick={() => setColor('pink')} />
            </div>
          </div>

          <div className="product-details">
            <h1 className="product-title">Silver Model</h1>
            
            <div className="product-rating">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <span className="review-count">(126 reviews)</span>
            </div>

            <div className="product-price">
              <span className="current-price">$299.99</span>
              <span className="original-price">$399.99</span>
              <span className="discount-tag">25% OFF</span>
            </div>

            <div className="product-availability">
              <i className="fas fa-check"></i> In Stock (23 units left)
            </div>

            <div className="product-description">
              <p>
            ✔ Basic Posture Monitoring
            ✔ Heart Rate Tracking
            ✔ GPS Tracking
            ✔ Voice Communication
            ✔ Standard App Features
              </p>
            </div>

            <div className="product-options">
              <div className="color-options">
                <p className="option-label">Color:</p>
                <div className="color-selectors">
                  <button 
                    className={`color-selector blue ${color === 'blue' ? 'selected' : ''}`}
                    onClick={() => setColor('blue')}
                  ></button>
                  <button 
                    className={`color-selector white ${color === 'white' ? 'selected' : ''}`}
                    onClick={() => setColor('white')}
                  ></button>
                  <button 
                    className={`color-selector black ${color === 'black' ? 'selected' : ''}`}
                    onClick={() => setColor('black')}
                  ></button>
                </div>
              </div>

              <div className="quantity-selector">
                <p className="option-label">Quantity:</p>
                <div className="quantity-controls">
                  <button className="quantity-btn" onClick={decreaseQuantity}>-</button>
                  <input type="text" value={quantity} readOnly />
                  <button className="quantity-btn" onClick={increaseQuantity}>+</button>
                </div>
              </div>
            </div>

            <div className="product-actions">
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="buy-now-btn">Buy Now</button>
            </div>

            <div className="product-features">
              <div className="feature">
                <i className="fas fa-shipping-fast"></i>
                <div className="feature-text">
                  <p className="feature-title">Free Shipping</p>
                  <p className="feature-desc">Delivered within 3-5 business days</p>
                </div>
              </div>
              
              <div className="feature">
                <i className="fas fa-undo"></i>
                <div className="feature-text">
                  <p className="feature-title">30-Day Returns</p>
                  <p className="feature-desc">Free returns within 30 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="payment-methods">
          <h3>Secure Payment Methods</h3>
          <div className="payment-icons">
            <img src="/images/visa.png" alt="Visa" />
            <img src="/images/mastercard.png" alt="Mastercard" />
            <img src="/images/amex.png" alt="American Express" />
            <img src="/images/paypal.png" alt="PayPal" />
          </div>
        </div>


        <div className="recommended-products">
          <h2>You May Also Like</h2>
          <div className="product-grid">
            <div className="product-card">
              <img src="/images/esp32.png" alt="Esp32" />
              <h3>Esp32</h3>
              <p className="product-card-price">$4.99</p>
            </div>
            <div className="product-card">
              <img src="/images/gps.png" alt="GPS Module (e.g., NEO-6M)" />
              <h3>GPS Module (e.g., NEO-6M)</h3>
              <p className="product-card-price">$3.49</p>
            </div>
            <div className="product-card">
              <img src="/images/ecg.png" alt="ECG Sensor (e.g., AD8232)" />
              <h3>ECG Sensor (e.g., AD8232)</h3>
              <p className="product-card-price">$5.07</p>
            </div>
            <div className="product-card">
              <img src="/images/heartrate.png" alt="Heart Rate Sensor (MAX30102)" />
              <h3>Heart Rate Sensor (MAX30102)</h3>
              <p className="product-card-price">$1.59</p>
            </div>
            <div className="product-card">
              <img src="/images/Gyroscope.png" alt="Gyroscope (MPU6050)" />
              <h3>Gyroscope (MPU6050)</h3>
              <p className="product-card-price">$2.39</p>
            </div>
            <div className="product-card">
              <img src="/images/ntc.png" alt="Temperature Sensor (NTC Thermistor sensor)" />
              <h3>Temperature Sensor (NTC Thermistor sensor)</h3>
              <p className="product-card-price">$1.19</p>
            </div>
            <div className="product-card">
              <img src="/images/i2s.png" alt="I2S Microphone (INMP441)" />
              <h3>I2S Microphone (INMP441)</h3>
              <p className="product-card-price">$4.73</p>
            </div>
            <div className="product-card">
              <img src="/images/speakerModule.png" alt="Speaker Module (I2S DAC, e.g., MAX98357A)" />
              <h3>Speaker Module (I2S DAC, e.g., MAX98357A)</h3>
              <p className="product-card-price">$2.03</p>
            </div>
            <div className="product-card">
              <img src="/images/speaker.png" alt="speaker" />
              <h3>speaker</h3>
              <p className="product-card-price">$1.69</p>
            </div>
            <div className="product-card">
              <img src="/images/battery.png" alt="7.4V 2000mAh LiPo Battery" />
              <h3>7.4V 2000mAh LiPo Battery</h3>
              <p className="product-card-price">$6.76</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>Premium audio products for the best listening experience.</p>
        </div>
        <div className="footer-column">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Returns & Exchanges</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Newsletter</h3>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BuyNow;