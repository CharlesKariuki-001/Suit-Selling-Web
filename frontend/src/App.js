import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Importing pages/components
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import About from './Pages/About'; // About page component
import Contact from './Pages/Contact'; // Contact page component (create this if not already created)
import Layout from './Pages/Layout'; // Layout component for shared navigation/footer


function App() {
  return (
    <Router>
      <div className="App">
        {/* Define routes */}
        <Routes>
          {/* Main layout with nested routes */}
          <Route path="/" element={<Layout />}>
            {/* Default route (home) */}
            <Route index element={<Home />} />
            
            {/* About Us route */}
            <Route path="about" element={<About />} />
            
            {/* Contact route */}
            <Route path="contact" element={<Contact />} />
            
            {/* Login and Signup routes */}
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            
            {/* Nested routes can be added here if needed */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;