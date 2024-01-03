import React from 'react'
import './stylesheet.css'

function Stylesheet(props) {
    let couleur = props.primary ? 'primary' : '';

    return (
        <div className={couleur}>Stylesheet</div>
    )
}

export default Stylesheet