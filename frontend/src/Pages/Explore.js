// src/Pages/Explore.js
import React, { useState } from "react";
import "../styles/Explore.css";
import {
  FaUserTie,
  FaRuler,
  FaTshirt,
  FaMale,
  FaFemale,
  FaBriefcase,
  FaHeart,
} from "react-icons/fa";

// Fit Guide Component
const FitGuide = () => {
  const [selectedFit, setSelectedFit] = useState("Slim Fit");

  const fits = [
    {
      name: "Slim Fit",
      description:
        "A tailored, close-to-body fit that enhances your silhouette. Best for a modern, sharp look.",
      img: "/images/slim-fit.png",
    },
    {
      name: "Classic Fit",
      description:
        "A traditional cut with more room for comfort. Ideal for timeless elegance and formal settings.",
      img: "/images/classic-fit.png",
    },
    {
      name: "Modern Fit",
      description:
        "A balance between slim and classic, offering a refined shape with slight room for movement.",
      img: "/images/modern-fit.png",
    },
  ];

  return (
    <div className="fit-guide">
      <h2 className="fit-title">Find Your Perfect Fit</h2>
      <p className="fit-subtitle">
        Choose the fit that matches your style and comfort.
      </p>

      {/* Fit Selection Buttons */}
      <div className="fit-selector">
        {fits.map((fit) => (
          <button
            key={fit.name}
            className={`fit-button ${selectedFit === fit.name ? "active" : ""}`}
            onClick={() => setSelectedFit(fit.name)}
          >
            {fit.name}
          </button>
        ))}
      </div>

      {/* Display Selected Fit */}
      <div className="fit-display">
        {fits.map(
          (fit) =>
            selectedFit === fit.name && (
              <div key={fit.name} className="fit-info">
                <img src={fit.img} alt={fit.name} className="fit-image" />
                <p className="fit-description">{fit.description}</p>
              </div>
            )
        )}
      </div>

      {/* Fit Icons */}
      <div className="fit-icons">
        <div className="fit-icon">
          <FaUserTie />
          <span>Tailored Fit</span>
        </div>
        <div className="fit-icon">
          <FaRuler />
          <span>Perfect Proportions</span>
        </div>
        <div className="fit-icon">
          <FaTshirt />
          <span>Comfort & Style</span>
        </div>
      </div>
    </div>
  );
};

// Available Suits Component
const AvailableSuits = () => {
  const [selectedCategory, setSelectedCategory] = useState("Men’s Suits");

  const categories = [
    { name: "Men’s Suits", icon: <FaMale />, img: "/images/mens-suit.jpg" },
    { name: "Women’s Suits", icon: <FaFemale />, img: "/images/womens-suit.jpg" },
    { name: "Business", icon: <FaBriefcase />, img: "/images/business-suit.jpg" },
    { name: "Wedding", icon: <FaHeart />, img: "/images/wedding-suit.jpg" },
    { name: "Casual", icon: <FaTshirt />, img: "/images/casual-suit.jpg" },
  ];

  return (
    <div className="available-suits">
      <h2 className="suits-title">Explore Our Collection</h2>
      <p className="suits-subtitle">Discover suits for every occasion.</p>

      {/* Suit Category Tabs */}
      <div className="suit-tabs">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`suit-tab ${selectedCategory === category.name ? "active" : ""}`}
            onClick={() => setSelectedCategory(category.name)}
          >
            {category.icon} {category.name}
          </button>
        ))}
      </div>

      {/* Suit Gallery */}
      <div className="suit-gallery">
        {categories.map(
          (category) =>
            selectedCategory === category.name && (
              <div key={category.name} className="suit-item">
                <img src={category.img} alt={category.name} className="suit-image" />
                <p className="suit-description">Premium {category.name} Suit</p>
              </div>
            )
        )}
      </div>
    </div>
  );
};

// Custom Suit Order Component
const CustomSuitOrder = () => {
  const [suitType, setSuitType] = useState("");
  const [color, setColor] = useState("#000000");
  const [fabric, setFabric] = useState("");
  const [customNotes, setCustomNotes] = useState("");

  return (
    <div className="custom-suit-order">
      <h2 className="custom-title">Design Your Own Suit</h2>
      <p className="custom-subtitle">Customize your suit to fit your style and measurements.</p>

      <form className="suit-form">
        {/* Suit Type */}
        <label>Suit Type</label>
        <select value={suitType} onChange={(e) => setSuitType(e.target.value)} required>
          <option value="">Select Suit Type</option>
          <option value="Business">Business</option>
          <option value="Wedding">Wedding</option>
          <option value="Casual">Casual</option>
          <option value="Tuxedo">Tuxedo</option>
        </select>

        {/* Suit Color */}
        <label>Preferred Color</label>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />

        {/* Fabric Type */}
        <label>Fabric Type</label>
        <select value={fabric} onChange={(e) => setFabric(e.target.value)} required>
          <option value="">Select Fabric</option>
          <option value="Cotton">Cotton</option>
          <option value="Wool">Wool</option>
          <option value="Linen">Linen</option>
          <option value="Velvet">Velvet</option>
        </select>

        {/* Additional Customization */}
        <label>Additional Customization (Optional)</label>
        <textarea
          value={customNotes}
          onChange={(e) => setCustomNotes(e.target.value)}
          placeholder="Describe any extra details you want..."
        />

        {/* Submit Button */}
        <button type="submit" className="submit-order">
          Submit Order
        </button>
      </form>

      {/* Suit Preview */}
      <div className="suit-preview">
        <h3>Suit Preview</h3>
        <div className="suit-sketch" style={{ backgroundColor: color }}></div>
      </div>
    </div>
  );
};

// Main Explore Component
const Explore = () => {
  return (
    <section>
      <FitGuide />
      <AvailableSuits />
      <CustomSuitOrder />
    </section>
  );
};

export default Explore;
