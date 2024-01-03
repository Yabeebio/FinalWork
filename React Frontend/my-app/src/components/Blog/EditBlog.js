import React from 'react'

function EditBlog(props) {

	console.log(props.blogId)
	console.log(props.data)

	const blog = props.data;

	return (
		<React.Fragment>
			<form action={`http://localhost:5000/editblog/${props.blogId}?_method=PUT`} method="post">
                    <input type="hidden" name="_method" value="PUT" />
                    <label>Titre</label>
                    <input type="text" name="titre" defaultValue={blog.titre} />
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
                <form action={`http://localhost:5000/deleteblog/${props.blogId}?_method=DELETE`} method="post">
                    <input type="hidden" name="_method" value="DELETE" />

                    <input type="submit" value="DELETE post" />
                </form>
		</React.Fragment>
	)
}

export default EditBlog