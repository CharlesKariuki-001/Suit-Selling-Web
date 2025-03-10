import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import '../styles/Contact.css';

function Contact() {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <animated.div className="contact-container" style={fadeIn}>
      {/* Contact Info Section */}
      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p>
          We value your feedback and are always here to assist you.
          Feel free to reach out using the details below.
        </p>
        <div className="contact-details">
          <div className="detail-item"><i className="fa-solid fa-phone"></i> +254791600534</div>
          <div className="detail-item"><i className="fa-brands fa-whatsapp"></i> +254791600534</div>
          <div className="detail-item"><i className="fa-solid fa-envelope"></i> dnnssifuna@gmail.com.com</div>
          <div className="social-links">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <i className="fa-solid fa-user"></i>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <i className="fa-solid fa-envelope"></i>
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <i className="fa-solid fa-phone"></i>
            <input type="tel" name="phone" placeholder="Your Phone Number" value={formData.phone} onChange={handleChange} />
          </div>
          <div className="input-group">
            <i className="fa-solid fa-comment"></i>
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </animated.div>
  );
}

export default Contact;
