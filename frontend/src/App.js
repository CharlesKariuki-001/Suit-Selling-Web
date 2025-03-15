import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Importing pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Layout from "./Pages/Layout";
import Explore from "./Pages/Explore";
import LoginModal from "./Pages/Login"; // Updated to act as a modal
import SignUpModal from "./Pages/SignUp"; // Updated to act as a modal

function App() {
  // State for managing modals
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(true); // Open login modal by default
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        {/* Define routes */}
        <Routes>
          {/* Main layout with nested routes */}
          <Route path="/" element={<Layout />}>
            {/* Default route (home) */}
            <Route
              index
              element={
                <Home
                  isLoginModalOpen={isLoginModalOpen}
                  setIsLoginModalOpen={setIsLoginModalOpen}
                  setIsSignUpModalOpen={setIsSignUpModalOpen}
                />
              }
            />

            {/* Explore route */}
            <Route path="explore" element={<Explore />} />

            {/* About Us route */}
            <Route path="about" element={<About />} />

            {/* Contact route */}
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>

        {/* Modals */}
        {isLoginModalOpen && (
          <LoginModal
            onClose={() => setIsLoginModalOpen(false)}
            onSwitchToSignUp={() => {
              setIsLoginModalOpen(false);
              setIsSignUpModalOpen(true);
            }}
          />
        )}
        {isSignUpModalOpen && (
          <SignUpModal
            onClose={() => setIsSignUpModalOpen(false)}
            onSwitchToLogin={() => {
              setIsSignUpModalOpen(false);
              setIsLoginModalOpen(true);
            }}
          />
        )}
      </div>
    </Router>
  );
}

export default App;