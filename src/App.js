import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Resume from "./pages/Resume";
import ContactMe from "./pages/Contact Me";
import React from 'react';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contactme" element={<ContactMe/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
