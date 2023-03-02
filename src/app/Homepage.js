import React from "react";

function Homepage () {
    return(
        <div className="homenav">
            <nav className="top">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/registerpage">Sign Up</Link>
                <Link to="/login">Login</Link>
            </nav>
        </div>
    )
}

export default Homepage;
