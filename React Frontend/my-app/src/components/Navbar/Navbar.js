import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

import axios from "axios";

function Navbar() {
    
    const [jwt, setJwt] = useState(null)

    useEffect(() =>{
        axios.get('http://localhost:5000/getjwt', {withCredentials:true})
        .then(response =>{
            console.log(response.data);
            setJwt(response.data);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }, [])

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/services">Service</Link>
            <Link to="/allblogs">Blogs</Link>
            {
                jwt ? <Link to="http://localhost:5000/logout">Logout</Link>
                    :
                    <Link to="/connexion">Login</Link>
            }
            
        </nav>
    );
}

export default Navbar;
