import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderComponent() {
    return (
        <div>
            <header>
                <nav className="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-3">
                    <a href="/" className="navbar-brand">Employee Manager App</a>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active"><Link to="/employees" className="nav-link">Employees</Link></li>
                        <li className="nav-item"><Link to="/add-employee" className="nav-link">Add Employee</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
