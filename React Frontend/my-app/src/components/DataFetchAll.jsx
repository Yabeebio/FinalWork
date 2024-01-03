import React, {useEffect, useState} from 'react'
import axios from 'axios';

function DataFetchAll() {
    // Chargement et erreur
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [posts, setPost] = useState({});

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then((response) => {
            setLoading(false)
            setPost(response.data)
            setError('')
        })
        .catch((error) => {
            setLoading(false)
            setPost({})
            setError('Houston, we have a problem')
        })
    }, []);

    return (
        <React.Fragment>
            {loading ? 'Loading...' : posts.map((post, index) => {
                return (
                    <div key='index'>
                        Titre : {post.title}
                        <br />
                        Body : {post.body}
                        <hr />
                    </div>
                )
            })}
        </React.Fragment>
    )
}

export default DataFetchAll