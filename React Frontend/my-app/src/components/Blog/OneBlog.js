import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import axios from 'axios'
import EditBlog from './EditBlog';

function OneBlog() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [blog, setBlog] = useState({});

    // Valeurs Edit:
    const [titre, setTitre] = useState("");
    
    const titreHandler = event => {
        setTitre(event.target.value);
    };

    const params = useParams()

    useEffect(() => {
        axios.get('http://localhost:5000/blog/' + params.id)
            .then((response) => {
                setLoading(false)
                setBlog(response.data)
                setTitre(response.data.titre)
                setError('')
            })
            .catch((error) => {
                setLoading(false)
                setBlog({})
                setError('Something went wrong')
            })
    }, [])


    return (

        <React.Fragment>
            <div>
                <h1> {loading ? ('Loading.....') : (blog.titre)} </h1>
                <h2> {loading ? ('Loading.....') : (blog.sousTitre)} </h2>
                <p> {loading ? ('Loading.....') : (blog.description)} </p>
                <p> {loading ? ('Loading.....') : (blog.auteur)} </p>

                {error ? (error) : (null)}

                {/* Méthode 2 */}
                <EditBlog blogId={params.id} data={blog}/>

                {/* Méthode 1 */}
                {/* <form action={`http://localhost:5000/editblog/${params.id}?_method=PUT`} method="post">
                    <input type="hidden" name="_method" value="PUT" />
                    <label>Titre</label>
                    <input type="text" name="titre" value={titre} onChange={titreHandler}/>
                    <br />
                    <label>Sous titre</label>
                    <input type="text" name="sousTitre" defaultValue={blog.sousTitre}/>
                    <br />
                    <label>Auteur</label>
                    <input type="text" name="auteur" defaultValue={blog.auteur}/>
                    <br />
                    <label>Description</label>
                    <textarea name="description" cols="30" rows="10" defaultValue={blog.description}></textarea>
                    <br />
                    <input type="submit" value="update post" />
                </form>
                <form action={`http://localhost:5000/deleteblog/${params.id}?_method=DELETE`} method="post">
                    <input type="hidden" name="_method" value="DELETE" />

                    <input type="submit" value="DELETE post" />
                </form> */}
            </div>
        </React.Fragment>
    )
}

export default OneBlog