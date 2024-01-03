import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { useLocation } from'react-router-dom'

function Admin() {
	const location = useLocation()
    console.log(location);
    
    return (
        <div>
            Administration
            <nav>
                <Link to="/admin/dashboard">Dashboard</Link>
                <Link to="/admin/gestionpost">Gestion Post</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default Admin