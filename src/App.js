import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Header from "./Home/Header";
import Footer from "./Home/Footer";
import Resume from "./Resume/Resume";
import ContactMe from "./Contact Me/Contact Me";


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
