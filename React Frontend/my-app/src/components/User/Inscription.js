import React from 'react'

function Inscription() {


	return (
		<React.Fragment>
			<h1>Page inscription</h1>

			<form action="http://localhost:5000/api/inscription" method="post">
				<label>Username</label>
				<input type="text" name="username" />
				<br />
				<label>Email</label>
				<input type="email" name="email" />
				<br />
				<label>Password</label>
				<input type="password" name="password" />
				<br />
				Type d'utilisateur :
				<label for="administrateur">Admin</label>
				<input type="radio" name="admin" id="administrateur" value="true" />
				<label for="user">Utilisateur classique</label>
				<input type="radio" name="admin" id="user" value="false" />
				<br />
				<input type="submit" value="Nouveau utilisateur" />
			</form>
		</React.Fragment>
	)
}

export default Inscription