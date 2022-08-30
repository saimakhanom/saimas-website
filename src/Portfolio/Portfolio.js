import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./portfolio.css";
import Counter from "./components/Counter";
import ToDoList from "./components/ToDoList";
import FileUpload from "./components/FileUpload";
import ColorPicker from "./components/ColorPicker";
import Form from "./components/Form/Form";
import API from "./components/API";



const Portfolio = () => {

	return (
		<>
			<div id="head">
				<p id="helloworld">HELLO, WORLD.</p>
				<h1 className="title">I&apos;m Saima Khanom.</h1>
				<h4 className="subtitle">HTML | CSS | JAVASCRIPT | REACT | SQL</h4>
				<p className="page-heading"> Portfolio</p>
			</div>

			<div>
				<h2 className="home-subtitle">Here Are Some Things I Can Do.</h2>
				<p className="content">Under each of the tabs below are various components that carry out different functions. </p>
				<br/>
				<p className="content">Each of these components have been built with various React functionality, such as hooks, as well as making use of React-Bootstrap components, and calling APIs to access and update information from  databases - and some are even re-usable!</p>
			</div>

			<div className="folio-tabs">
				<Tabs
					defaultActiveKey="profile"
					id="portfolio"
					className="portfoliotabs"
				>
					<Tab eventKey="counter" title="Counter" >
						<Counter />
					</Tab>

					<Tab eventKey="todolist" title="To Do List" >
						<ToDoList />
					</Tab>

					<Tab eventKey="uploadfile" title="Upload File" >
						<FileUpload />
					</Tab>

					<Tab eventKey="colorpicker" title="Color Picker" >
						<ColorPicker />
					</Tab>

					<Tab eventKey="form" title="Form" >
						<Form />
					</Tab>

					<Tab eventKey="api" title="API" >
						<API />
					</Tab>
				</Tabs>

			</div>
		</>
	);
};

export default Portfolio;