import React, { useState } from 'react'

import axios from 'axios';

function MultipleUploads() {

	const [selectedFile, setSelectedFile] = useState([])

	const handleFileChange = (event) => {
		console.log(event.target.files);
		setSelectedFile(Array.from(event.target.files));
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		// Si il y a au moins un fichier selectionné alors:
		if (selectedFile.length > 0) {
			const formData = new FormData();
			selectedFile.forEach(file => {
				formData.append('images', file)
			});
			axios.post("http://localhost:5000/multipleuploads", formData)
				.then((response) => {
					console.log(response);
				})
				.catch((error) => {
					console.log(error.message);
				})
		}

	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type='file' multiple onChange={handleFileChange} />
				<input type='submit' value="Send" />
			</form>
		</div>
	)
}

export default MultipleUploads