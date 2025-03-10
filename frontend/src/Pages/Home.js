import React from 'react';
import { FaMapMarkerAlt, FaTruck } from 'react-icons/fa';
import '../styles/Home.css'; // Import the external CSS file

const suitsData = {
  suitsDetails: [
    {
      id: 1,
      name: "Classic Black Tuxedo",
      image: "/Image 1.jpg",
      description: "A timeless black tuxedo for formal occasions.",
    },
    {
      id: 2,
      name: "Navy Blue Business Suit",
      image: "/Image 2.jpg",
      description: "A sharp navy blue suit perfect for business meetings.",
    },
    {
      id: 3,
      name: "Charcoal Grey Suit",
      image: "/Image 3.jpg",
      description: "A modern grey suit that exudes confidence and class.",
    },
    {
      id: 4,
      name: "Royal Blue Slim Fit Suit",
      image: "/Image 4.jpg",
      description: "A stylish royal blue suit tailored for a sleek look.",
    },
    {
      id: 5,
      name: "White Dinner Jacket",
      image: "/Image 5.jpg",
      description: "A sophisticated white suit for special events.",
    },
    {
      id: 6,
      name: "Checked Brown Suit",
      image: "/Image 6.jpg",
      description: "A classic checked brown suit with a vintage touch.",
    },
    {
      id: 7,
      name: "Light Grey Summer Suit",
      image: "/Image 7.jpg",
      description: "A light grey suit perfect for warm-weather elegance.",
    },
    {
      id: 8,
      name: "Burgundy Velvet Blazer",
      image: "/Image 8.jpg",
      description: "A luxurious burgundy blazer that makes a bold statement.",
    },
  ],
};

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className='hero-image'>
        <img
          src="/Image.jpg" // Reference the hero image from the public folder
          alt="Hero"
        />
        </div>
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
      {suitsData.suitsDetails.map((suit) => (
        <div key={suit.id} className="suit-card">
          <img src={suit.image} alt={suit.name} className="suit-image" />
          <div className="suit-overlay">
            <div className="suit-info">
              <h3>{suit.name}</h3>
              <p>{suit.description}</p>
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
      

      <section id="why-choose-us">
  <h2 class="choose-heading">Why Choose Our Suits?</h2>
  <p class="choose-intro">
    A suit is more than just clothing; it's a statement. Our suits are crafted with precision, style, and class.  
    Here’s why you should get yours from us:
  </p>

  <div class="choose-feature">
    <span class="choose-icon">🧵</span>
    <div class="choose-text">
      <h3>Premium Quality Fabrics</h3>
      <p>We use only the finest materials, ensuring that your suit looks luxurious and feels comfortable all day long.</p>
    </div>
  </div>

  <div class="choose-feature">
    <span class="choose-icon">✂️</span>
    <div class="choose-text">
      <h3>Tailored to Perfection</h3>
      <p>Our expert tailors ensure a perfect fit, customized to your body shape and personal style.</p>
    </div>
  </div>

  <div class="choose-feature">
    <span class="choose-icon">🕶️</span>
    <div class="choose-text">
      <h3>Timeless Style</h3>
      <p>From classic to modern designs, our suits are crafted to elevate your confidence and make a lasting impression.</p>
    </div>
  </div>

  <div class="choose-feature">
    <span class="choose-icon">💼</span>
    <div class="choose-text">
      <h3>Perfect for Any Occasion</h3>
      <p>Whether it's a wedding, business meeting, or a casual night out, we have a suit that fits your moment.</p>
    </div>
  </div>

  <div class="choose-feature">
    <span class="choose-icon">🔥</span>
    <div class="choose-text">
      <h3>Unmatched Attention to Detail</h3>
      <p>Every stitch, button, and cut is designed with precision, making you stand out effortlessly.</p>
    </div>
  </div>

  <div class="choose-feature">
    <span class="choose-icon">📞</span>
    <div class="choose-text">
      <h3>Exceptional Customer Service</h3>
      <p>We guide you through the process, ensuring you get the best suit for your personality and needs.</p>
    </div>
  </div>

  <p class="choose-closing">
    Invest in a suit that speaks class. Elevate your style today!  
    <a href="#contact" class="choose-button">Reach Out to Us</a>
  </p>
</section>



   {/* Our Locations & More Section */}
   <section className="locations-section">
        <h2 className="section-title">📍 Our Locations & More</h2>
        <p className="section-description">
          We are present in key cities, always close to you. 
          <br />Have inquiries? Feel free to reach out for more details.
        </p>
        
        <div className="locations-grid">
          {/* Location Cards */}
          {[
            { city: 'Nairobi', icon: <FaMapMarkerAlt className="location-icon" /> },
            { city: 'Eldoret', icon: <FaMapMarkerAlt className="location-icon" /> },
            { city: 'Nakuru', icon: <FaMapMarkerAlt className="location-icon" /> },
            { city: 'Kitale', icon: <FaMapMarkerAlt className="location-icon" /> },
          ].map((location, index) => (
            <div key={index} className="location-card">
              {location.icon}
              <h3>{location.city}</h3>
            </div>
          ))}
        </div>

        {/* Contact Inquiry Button */}
        <div className="inquiry-container">
          <button className="inquiry-button">
            <FaTruck className="truck-icon" /> Reach Out for More
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;