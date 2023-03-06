import React from "react";
import { Link } from "react-router-dom";

function Homepage () {
    return(

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Movies App</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <Link to="/register">Sign Up</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
            <h1> Hi there!! This is a site where you can search for a movie you like and add it to your list of collections. Have fun!</h1>
        </div>
    </nav>
    )
}

export default Homepage;



<div className="homenav">
<h1>MOVIE APP</h1>
<nav className="nav">
    <a href= '/' className="site-title"> Movies App</a>
    <Link to="/register">Sign Up</Link>
    <Link to="/login">Login</Link>
</nav>
</div>