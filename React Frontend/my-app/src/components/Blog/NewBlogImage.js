import React, { useState } from 'react'
import axios from 'axios'

function NewBlogImage() {

	const [file, setFile] = useState(null);
	const [titre, setTitre] = useState('');
	const [description, setDescription] = useState('');

	const handleFileChange = (event) => {
		setFile(event.target.files[0]);
	}
	const handleTitreChange = (event) => {
		setTitre(event.target.value);
	}
	const handleDescriptionChange = (event) => {
		setDescription(event.target.value);
	}

	const handleSubmit = (event) => {
		event.preventDefault();

		if(file && titre && description) {
			const formData = new FormData();
			formData.append('image', file);
			formData.append('titre', titre);
			formData.append('description', description);

			axios.post("http://localhost:5000/addblog", formData)
			.then((response) =>{
				console.log(response);
			})
			.catch((error) => {
				console.log(error.message);
			});
		}
	}

	return (
		<React.Fragment>
			<form onSubmit={handleSubmit}>
				<label>Image :</label>
				<input type='file' onChange={handleFileChange}/>
				<label>Titre :</label>
				<input type='text' onChange={handleTitreChange}/>
				<label>Description :</label>
				<textarea onChange={handleDescriptionChange}></textarea>

				<input type='submit' />
			</form>
		</React.Fragment>
	)
}

export default NewBlogImage