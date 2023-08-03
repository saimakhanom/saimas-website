import React, { useState } from "react";

const FileUpload = () => {
	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setisFilePicked] = useState(false);

	const handleChange = (e) => {
		setSelectedFile(e.target.files[0]);
		setisFilePicked(true);
	};


	



	return (
		<div>
			<p className="counter-title content">The following input fetches data regarding the selected file and displays the data to the user.</p>

			<div className="file-div">
				<h5 className="file-text">Use the button below to upload your file:</h5>
				<input className="file-input" type="file" name="file" id="file" onChange={handleChange} />
				<label htmlFor="file" className="file-input-label">Select File</label>
				{isFilePicked ? (
					<div className="file-info">
						<p className="content">File Name: {selectedFile.name}</p>
						<p className="content">File Size (bytes): {selectedFile.size}</p>
						<p className="content">File Type: {selectedFile.type}</p>
					</div>
				) : (
					<p className="file-text">Select a file to show details</p>
				)}

			</div>
		</div>
	);
};

export default FileUpload;