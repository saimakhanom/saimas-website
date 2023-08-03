import React from "react";
import Button from "../components/AboutButton";
import "./about.css";


const About = () => { 
    
	return ( 
		<>
			<div id="head">
				<p id="helloworld">HELLO, WORLD.</p>
				<h1 className="title">I&apos;m Saima Khanom.</h1>
				<h4 className="subtitle">HTML | CSS | JAVASCRIPT | REACT | SQL</h4>
				<p className="page-heading">About Me</p>
			</div>
        
			<div>
				<h3 className="about-subtitle">Let Me Introduce Myself.</h3>
				<p className="about-info">Click one of the buttons below to learn more about me.</p>
				<Button/>
			</div>
		</>
	); 
};



export default About;