import React from "react";

function Greet({name, age, children}) {
    console.log(name)
    return (
        <div>
            <h1>Hello {name}, vous avez {age} ans.</h1>
            <p>{children}</p>
        </div>
    )
}
export default Greet;