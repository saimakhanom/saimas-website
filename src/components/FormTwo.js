import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/formtwo.css";

export const FormTwo = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm("service_32bfnfu", "template_5bbfdrk", form.current, "9gukspD-2kso9Tw3z")
			.then((result) => {
				console.log(result.text);
				alert("Message Sent.");
				e.target.reset();
			}, (error) => {
				console.log(error.text);
				alert("Error. Message not sent.");
			});
	};

  
	return (
		<div>
			<h2 className="home-subtitle"> I&apos;d Love To Hear From You.</h2>
			<p className="content">Use the form below to send me a message.</p>
			<div className="container">
				<form ref={form} onSubmit={sendEmail} className="form">
        
					<input required className="name" type="text" name="user_name" tabIndex="1" placeholder="Name"/>
        
					<input required className="email" type="email" id="email" name="user_email" tabIndex="2" placeholder="Email"/>
       
					<textarea required className="message" name="message" tabIndex="3" placeholder="Type your message"/>
					<button type="submit" className="send">Send</button>
				</form>
			</div>
		</div>
	);
};

export default FormTwo;