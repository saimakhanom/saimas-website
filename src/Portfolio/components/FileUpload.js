import React, { useState } from "react";

const FileUpload = () => {
	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setisFilePicked] = useState(false);

	const handleChange = (e) => {
		setSelectedFile(e.target.files[0]);
		setisFilePicked(true);
	};


	const handleSubmit = () => {
		const formData = new FormData();

		formData.append("File", selectedFile);

		fetch(
			"https://freeimage.host/api/1/upload?key=<6d207e02198a847aa98d0a2a901485a5>",
			{
				method: "POST",
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log("Success:", result);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	};



	return (
		<div>
			<p className="counter-title content">The following input fetches data regarding the selected file and displays the data to the user.</p>

			<div className="file-div">
				<h5 className="file-text">Use the button below to upload your file:</h5>
				<input className="file-input" type="file" name="file" id="file" onChange={handleChange} />
				<label htmlFor="file" className="file-input-label">Select File</label>
				{isFilePicked ? (
					<div>
						<p className="content">File Name: {selectedFile.name}</p>
						<p className="content">File Size (bytes): {selectedFile.size}</p>
						<p className="content">File Type: {selectedFile.type}</p>
					</div>
				) : (
					<p className="file-text">Select a file to show details</p>
				)}

				<button onClick={handleSubmit} className="file-btn" type="submit">Upload</button>

			</div>
		</div>
	);
};

export default FileUpload;