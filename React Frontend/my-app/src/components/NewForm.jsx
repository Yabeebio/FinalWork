import React, { Component } from 'react';
import './newForm.css'

class NewForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nom: '',
            prenom: '',
            pseudo: '',
            email: '',
            submitted: false, // Ajout de l'état pour gérer la soumission du formulaire
        };
    }

    handleNomChange = (event) => {
        this.setState({ nom: event.target.value });
    };

    handlePrenomChange = (event) => {
        this.setState({ prenom: event.target.value });
    };

    handlePseudoChange = (event) => {
        if (event.target.value.length === 0) {
            event.target.className = ""
        }
        else if (event.target.value.length < 3) {
            event.target.className = "wrong"
        }
        else {
            event.target.className = "right"
        }

        this.setState({ pseudo: event.target.value });
    };

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    };

    handleSubmit = (event) => {
        // Modification de l'état pour indiquer que le formulaire a été soumis
        this.setState({ submitted: true });
        /* alert( // Si le message doit s'afficher sous forme d'alerte
            `Merci ${this.state.nom} ${this.state.prenom} d'avoir pris contact avec nous. Nous reviendrons vers vous à cet email ${this.state.email}`
        ); */
        event.preventDefault();
    };

    render() {
        const { nom, prenom, pseudo, email, submitted } = this.state;
        return (
            <div>
                <h1>Inscription Newsletter</h1>
                {submitted ? ( // Afficher le h1 conditionnellement
                    <h1>
                        {`Merci ${this.state.nom} ${this.state.prenom} d'avoir pris contact avec nous. Nous reviendrons vers vous à cet email ${this.state.email}`}
                    </h1>
                ) : (
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label> Nom </label>
                            <input type="text" value={nom} onChange={this.handleNomChange} />
                        </div>
                        <div>
                            <label> Prenom </label>
                            <input
                                type="text"
                                value={prenom}
                                onChange={this.handlePrenomChange}
                            />
                        </div>
                        <div>
                            <label> Pseudo </label>
                            <input
                                type="text"
                                value={pseudo}
                                onChange={this.handlePseudoChange}
                            />
                        </div>
                        <div>
                            <label>Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={this.handleEmailChange}
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </div>
        );
    }
}

export default NewForm;