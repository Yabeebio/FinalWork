import React, { useState, useEffect } from 'react'
import axios from 'axios';

function ApiFilm() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({});
    const [filmName, setFilmName] = useState('');

    const handleFilmNameChange = event => {
        setFilmName(event.target.value);
    }

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?t=${filmName}&apikey=f711494e`)
            .then((response) => {
                setLoading(false)
                setPost(response.data)
                setError('')
            })
            .catch((error) => {
                setLoading(false)
                setPost({})
                setError('Something went wrong')
            })
    });

    return (
        <React.Fragment>
            <form action="">
                <label>Film recherché :</label>
                <input type="text" onChange={handleFilmNameChange} />

                <button type='submit'>Find</button>
            </form>
            <h1>{loading ? ('Loading.....') : (post.Title)}</h1>
            <img alt='img film' src={loading ? ('Loading.....') : (post.Poster)} />
            <h2>{loading ? ('Loading.....') : (post.Year)}</h2>
            <h2>{loading ? ('Loading.....') : (post.BoxOffice)}</h2>

            {error ? (error) : (null)}
        </React.Fragment>
    )
}

export default ApiFilm