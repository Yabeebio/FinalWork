import React, { Component } from 'react'

class AdminTest extends Component {
  
    constructor(){
        super();

        this.state = {
            admin : false,
            message : "Veuillez vous connecter en tant qu'administrateur"
        }
    }

    adminLogged(){
        this.setState({
            admin : true,
            message : "Welcome Admin"
        });
    }
  
    render() {
    return this.state.admin ? ( <div> <h1> {this.state.message} </h1> <button>Edit</button> </div> ) : ( <div> <h1> {this.state.message} </h1> <button onClick={() => this.adminLogged()}>Loggin as Admin</button> </div> );
    }
}

export default AdminTest