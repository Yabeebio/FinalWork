import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { useLocation } from'react-router-dom'

function Services() {
    const location = useLocation()
    console.log(location);
    
    return (
        <div>
            Service
            <nav>
                <Link to="/services/marketing">Service marketing</Link>
                <Link to="/services/developpement">Services Developpement</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default Services