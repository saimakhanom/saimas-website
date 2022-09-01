import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Popup from "./Popup.js";

const API = () => {
	const [newEmployeeIsOpen, setNewEmployeeIsOpen] = useState(false);
	const [updateEmployeeIsOpen, setUpdateEmployeeIsOpen] = useState(false);
	const [employees, setEmployees] = useState([{
		"id": 1,
		"first_name": "Sebastian",
		"last_name": "Eschweiler",
		"email": "sebastian@codingthesmartway.com"
	},
	{
		"id": 2,
		"first_name": "Steve",
		"last_name": "Palmer",
		"email": "steve@codingthesmartway.com"
	},
	{
		"id": 3,
		"first_name": "Ann",
		"last_name": "Smith",
		"email": "ann@codingthesmartway.com"
	}]);
	const [show, setShow] = useState(false);
	const [buttonShow, setButtonShow] = useState(true);
	const [newEmployee, setNewEmployee] = useState({
		"id": "",
		"first_name": "",
		"last_name": "",
		"email": ""
	});
	const [updatedEmployee, setUpdatedEmployee] = useState({
		"id": "",
		"first_name": "",
		"last_name": "",
		"email": ""
	});


	// Delete data

	const deleteEmployees = (index) => {
		setEmployees(employees.filter((item, i) => i !== index));
	};


	//Add new data

	const toggleNewEmployeePopup = () => {
		setNewEmployeeIsOpen(!newEmployeeIsOpen);
	};

	const handleChange = (e) => {
		setNewEmployee(previous => ({
			...previous,
			[e.target.name]: e.target.value
		}));
	};



	const addNewEmployee = () => {
				setShow(!show);
				setButtonShow(!buttonShow);
				alert("Employee Added!");
				toggleNewEmployeePopup();
				setNewEmployee({
					"id": "",
					"first_name": "",
					"last_name": "",
					"email": ""
				});
	};

	//Update data
	const toggleUpdateEmployeePopup = () => {
		setUpdateEmployeeIsOpen(!updateEmployeeIsOpen);
	};

	const updateEmployee = () => {
		
		alert("Employee Updated!");
	};

	const handleUpdate = (e) => {
		setUpdatedEmployee(previous => ({
			...previous,
			[e.target.name]: e.target.value
		}));
	};


	




	return (
		<div className="api">
			<p className="counter-title content">This is a table displaying employee data from a dummy API using Axios. Updating the data using the buttons and inputs below directly updates the data in the dummy API. </p>
			<div>

				<div className="employee">
					<Table striped bordered >
						<thead className="table-heading">
							<tr>
								<th>#</th>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Email</th>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody className="table-body">
							{employees.map((employee, index) => (

								<tr key={employee.id}>
									<td>{employee.id}</td>
									<td>{employee.first_name}</td>
									<td>{employee.last_name}</td>
									<td>{employee.email}</td>
									<td><button className="employee-btn" onClick={(e) => deleteEmployees(index, e)}>Delete Employee</button></td>
									<td><button id={employee.id} className="employee-btn" onClick={(e) => { toggleUpdateEmployeePopup(employee.id, e); }}>Update Employee</button></td>
								</tr>

							))}
						</tbody>
					</Table>


				</div>

				{updateEmployeeIsOpen && <Popup content={<div className="updateForm">
					<form >
						<h4 className="counter-title content" id="newemployee">Update the employee details below:</h4>
						<div className="input-div">
							<input type="hidden" value={updatedEmployee.id} />
							<input className="employee-input" type="text" name="first_name" value={updatedEmployee.first_name} placeholder="First Name" onChange={handleUpdate} />
							<input className="employee-input" type="text" name="last_name" value={updatedEmployee.last_name} placeholder="Last Name" onChange={handleUpdate} />
							<input className="employee-input" type="text" name="email" value={updatedEmployee.email} placeholder="Email" onChange={handleUpdate} />
						</div>
						<button className="updateemployee-btn" onClick={updateEmployee}>Update</button>
					</form>

				</div>}
					handleClose={toggleUpdateEmployeePopup} />}

			</div>

			<button className="addemployee-btn" onClick={toggleNewEmployeePopup}>Add New Employee</button>

			{newEmployeeIsOpen &&
				<Popup handleClose={toggleNewEmployeePopup} content={
					<div>
						<form className="employee-updateForm">
							<h4 className="counter-title content" id="newemployee">Fill in the new employee details below:</h4>
							<div className="input-div">

								<input onChange={handleChange} id="firstName" type="text" placeholder="First Name" name="first_name" className="employee-input" value={newEmployee.first_name} />

								<input onChange={handleChange} id="lastName" type="text" placeholder="Last Name" name="last_name" className="employee-input" value={newEmployee.last_name} />

								<input onChange={handleChange} id="email" type="text" placeholder="Email Address" name="email" className="employee-input" value={newEmployee.email} />
							</div>
							<button onClick={addNewEmployee} className="addemployee-btn">Submit details</button>
						</form>
					</div>
				} />
			}








		</div>
	);

};

export default API;