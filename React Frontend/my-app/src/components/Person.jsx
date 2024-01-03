import React from 'react'
import './stylesheet.css'

function Person({ person, color1, color2 }) {
    const change = {
        color: 'pink',
        backgroundColor: 'darkslategray'
    }
    /* const changeBis = {
        color: 'indigo',
        backgroundColor:'silver'
    } */

    const inline = {
        color: color1,
        backgroundColor: color2
    }


    if (person.name === "Diana") {
        return (
            <div>
                <h2 className='border' style={change}> Je suis {person.name}, j'ai {person.age} ans, mon skill est {person.skill} </h2>
            </div>
        )
    }
    else {
        return (
            <div>
                <h2 className='border' style={inline}> Je suis {person.name}, j'ai {person.age} ans, mon skill est {person.skill} </h2>
            </div>
        )
    }

}

export default Person