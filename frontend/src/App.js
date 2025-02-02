import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Updated import
import './App.css';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>  
          <Route path="/" element={<Home />} />  
          <Route path="/login" element={<Login />} />  
          <Route path="/signup" element={<SignUp />} />  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
