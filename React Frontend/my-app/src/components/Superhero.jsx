import React from "react";

function Superhero(props){
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name} A.K.A {props.nhero}</h1>
            <p>{props.children}</p>
        </div>
    )
}

export default Superhero;