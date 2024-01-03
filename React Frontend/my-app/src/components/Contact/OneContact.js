import React, { useState, useEffect } from 'react'
import axios from 'axios'


function OneContact() {
	
	const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [contact, setContact] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:5000/contact/6571cdee2544bf0a2386b674`)
            .then((response) => {
                setLoading(false)
                setContact(response.data)
                console.log(response.data)
                setError('')
            })
            .catch((error) => {
                setLoading(false)
                setContact({})
                setError('Something went wrong')
            })
    }, [])
	
	return (
		<div>
            <h1> {loading ? ('Loading.....') : (contact.nom)} </h1>
            <p> {loading ? ('Loading.....') : (contact.prenom)} </p>

            {error ? (error) : (null)}
        </div>
	)
}

export default OneContact