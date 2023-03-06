import React from "react";
import { Link } from "react-router-dom";

function Homepage () {
    return(

    <div>

    
    <nav className="navbar bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand">Movies App</a>

            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/register">Sign Up</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                </li>
            </ul>

        </div>
    </nav>
    </div>

    )
}

export default Homepage;



