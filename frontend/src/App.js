import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import About from './Pages/About'; // Import the About component
import Layout from './Pages/Layout'; // Fixed the casing issue

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Main layout with nested routes */}
          <Route path="/" element={<Layout />}>
            {/* Index route (default route when visiting '/') */}
            <Route index element={<Home />} />
            {/* About Us route */}
            <Route path="about" element={<About />} />
            {/* Contact route (you can create this later) */}
            <Route path="contact" element={<h1>Contact Page</h1>} />
            {/* Login and Signup routes */}
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;