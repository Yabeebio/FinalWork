import React, { useState } from 'react'

import axios from 'axios'

function ImageUpload() {

	const [selectedFile, setSelectedFile] = useState(null)

	const handleFileChange = (event) => {
		setSelectedFile(event.target.files[0]);
		console.log(event.target.files[0]);
	}

	const handleSubmit = (event) => {
		event.preventDefault(); // empeche soumission du formulaire
		// Si il y a une image à envoyer dans ce cas:

		if (selectedFile) {
			const formData = new FormData();
			formData.append('image', selectedFile);
			axios.post("http://localhost:5000/imageupload", formData)
				.then((response) => {
					console.log(response.data);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};

	return (
		<React.Fragment>
			<form onSubmit={handleSubmit}>
				<label>Image :</label>
				<input type='file' onChange={handleFileChange} />

				<input type='submit' value='Send' />
			</form>
		</React.Fragment>
	)
}

export default ImageUpload