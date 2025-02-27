import React from 'react';
import '../styles/Home.css'; // Import the external CSS file

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <img
          src="/Image.jpg" // Reference the hero image from the public folder
          alt="Hero Image"
          className="hero-image"
        />
        <div className="hero-content">
          <h1>Welcome to Suit Store</h1>
          <p>Discover the art of elegance with our exclusive collection.</p>
          <button className="cta-button">Explore Now</button>
        </div>
      </section>

      {/* Featured Suits Section */}
      <section className="featured-suits-section">
        <h2 className="section-title">Featured Suits</h2>
        <p className="section-description">
          Step into sophistication with our handpicked collection of featured suits. Each suit is crafted from premium materials, 
          designed to enhance your style and confidence. Whether you're attending a formal event or elevating your everyday look, 
          our featured suits offer unmatched quality and timeless elegance.
        </p><br></br><br></br>
        <div className="suits-grid">
          {Array.from({ length: 8 }, (_, index) => (
            <div key={index} className="suit-card">
              <img
                src={`/Image ${index + 1}.jpg`} // Dynamically reference images 1-8
                alt={`Suit ${index + 1}`}
                className="suit-image"
              />
              <div className="suit-overlay">
                <div className="suit-info">
                  <h3>Suit {index + 1}</h3>
                  <p>${299 + index * 50}</p>
                  <p>A brief description of this elegant suit goes here.</p>
                  <button className="view-button">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>
              "The quality of the suits is unmatched. I feel confident every time I wear one."
            </p>
            <span className="author">- John Doe</span>
          </div>
          <div className="testimonial-card">
            <p>
              "I was blown away by the variety of styles available. Highly recommend!"
            </p>
            <span className="author">- Jane Smith</span>
          </div>
          <div className="testimonial-card">
            <p>
              "I was blown away by the variety of styles available. Highly recommend!"
            </p>
            <span className="author">- Jane Smith</span>
          </div>
          <div className="testimonial-card">
            <p>
              "I was blown away by the variety of styles available. Highly recommend!"
            </p>
            <span className="author">- Jane Smith</span>
          </div>
          <div className="testimonial-card">
            <p>
              "I was blown away by the variety of styles available. Highly recommend!"
            </p>
            <span className="author">- Jane Smith</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;