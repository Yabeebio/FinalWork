import React, { Component } from "react";

class Welcome extends Component {
    render() {
        const { name, age, children } = this.props;

        return (
            <div>
                <h1>Welcome Home {name}. You are {age} years old !</h1>
                <p>{children}</p>
            </div>
        )
    }
};

export default Welcome;