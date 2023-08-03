import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/logo.jpg";

const Header = () => {
	return (
		<div className="navigation">

			<Navbar bg="light" variant="light" className="navbar">
				<img src={logo} className="logo" alt="logo" />
				<Nav className="me-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/about">About</Nav.Link>
					<Nav.Link href="/Resume">Resume</Nav.Link>
					<Nav.Link href="/portfolio">Portfolio</Nav.Link>
					<Nav.Link href="/contactme">Contact Me</Nav.Link>
				</Nav>
			</Navbar>
		</div>
	);
};

export default Header;