import React, { useEffect, useState } from 'react'
import axios from 'axios';

function DataFetchAllContact() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [contacts, setContacts] = useState({});

    useEffect(() => {
        axios.get('http://localhost:5000')
            .then((response) => {
                setLoading(false)
                setContacts(response.data)
                setError('')
            })
            .catch((error) => {
                setLoading(false)
                setContacts({})
                setError('Houston, we have a problem')
            })
    }, []);


    return (
        <React.Fragment>
            {loading ? 'Loading...' : contacts.map((contact, index) => {
                return (
                    <div key={index}>
                        Nom : {contact.nom}
                        <br />
                        Prenom : {contact.prenom}
                        <br />
                        Email : {contact.email}
                        <hr />
                    </div>
                )
            })}
        </React.Fragment>
    )
}

export default DataFetchAllContact