import React, { Component } from 'react'

class UserGreeting extends Component {

    // Les states doivent être créer dans des constructor
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false,
            message: "Welcome Guest !"
        }
    }

    loginMessage() {
        this.setState({
            isLoggedIn : true,
            message: "Welcome User !"
        });
    }


    render() {
        console.log(this.state.message);
        return this.state.isLoggedIn ? ( <div> <h1> Welcome to the jungle </h1> </div> ) : ( <div> <h1> Welcome Back </h1> <button onClick={() => this.loginMessage()}>Se connecter</button></div>)
        
        // Cricuit court : return this.state.isLoggedIn && (<div> Welcome to the Jungle </div>)

        // return (
        //     <div>
        //         <h1>{this.state.message}</h1>
        //         <button onClick={() => this.loginMessage()}>Se connecter</button>
        //     </div>
        // );

        // if (this.state.isLoggedIn) {
        //     return (
        //         < div >
        //             Welcome to the jungle
        //         </div >
        //     )
        // }
        // else {
        //     return (
        //         <div>You're not welcomed</div>
        //     )
        // }
    }
}



export default UserGreeting