import React, { useEffect, useRef } from 'react';
import '../styles/About.css'; // Import the external CSS file

function About() {
  const storyRef = useRef(null);

  // Smooth scroll effect for sections
  useEffect(() => {
    const handleScroll = () => {
      if (storyRef.current) {
        const scrollTop = window.scrollY;
        storyRef.current.style.transform = `translateY(${scrollTop * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <img
          src="/AboutHero.jpg" // Replace with your hero image
          alt="About Hero"
          className="hero-image"
        />
        <div className="hero-content">
          <h1>Our Story</h1>
          <p>Where elegance meets craftsmanship.</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section" ref={storyRef}>
        <div className="story-content">
          <h2>Our Journey</h2>
          <p>
            Founded in [Year], Suit Store has been dedicated to providing unparalleled quality and style to gentlemen around the world. Our passion for suits began with a simple idea: every man deserves to feel confident and stylish in what he wears. Over the years, we've refined our craft, working with the finest materials and tailoring techniques to create suits that stand the test of time.
          </p>
          <p>
            From classic designs to modern silhouettes, our collection reflects the ever-evolving fashion landscape while staying true to our core values of quality, comfort, and sophistication.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img
              src="/TeamMember1.jpg" // Replace with actual image
              alt="John Doe"
              className="member-image"
            />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img
              src="/TeamMember2.jpg" // Replace with actual image
              alt="Jane Smith"
              className="member-image"
            />
            <h3>Jane Smith</h3>
            <p>Creative Director</p>
          </div>
          <div className="team-member">
            <img
              src="/TeamMember3.jpg" // Replace with actual image
              alt="Michael Brown"
              className="member-image"
            />
            <h3>Michael Brown</h3>
            <p>Head Tailor</p>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            At Suit Store, our mission is to empower every gentleman with the confidence that comes from wearing a perfectly tailored suit. We believe in blending tradition with innovation, creating timeless pieces that reflect individuality and style.
          </p>
        </div>
        <div className="vision-content">
          <h2>Our Vision</h2>
          <p>
            Our vision is to become the go-to destination for discerning men who value quality, craftsmanship, and elegance. We strive to inspire confidence and elevate the art of dressing well.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;