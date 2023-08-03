import React from "react";
import Button from "../components/AboutButton";
import "../styles/about.css";
import Banner from "../components/Banner";


const About = () => { 
    
	return ( 
		<>
			<Banner pageName="About Me"/>
        
			<div>
				<h3 className="about-subtitle">Let Me Introduce Myself.</h3>
				<p className="about-info">Click one of the buttons below to learn more about me.</p>
				<Button/>
			</div>
		</>
	); 
};



export default About;