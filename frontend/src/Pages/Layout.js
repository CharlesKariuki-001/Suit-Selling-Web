import React from "react";
import Navbar from '../components/Navbar'; 

import Footer from "../components/Footer"; 
import { Outlet } from "react-router-dom"; 

const Layout = () => {
  return (
    <div>
      <Navbar /> 
      <main style={{ minHeight: "80vh", padding: "20px" }}>
        <Outlet /> {/* This will load the pages inside Layout */}
      </main>
      <Footer /> 
    </div>
  );
};

export default Layout;
