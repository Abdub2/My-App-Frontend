import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";
import Allmovies from "./Allmovies";


function Dashboard() {

    const navigate = useNavigate()
    const [movies, setMovies] = useState([])
    

  function handleDeleteMovie(id) {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  }

    useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}`.concat("/movies"))
    .then((response) => response.json())
    .then((data) => setMovies(data))
    }, [])

    function handleSearch(query) {
    fetch(`${process.env.REACT_APP_BASE_URL}`.concat(`/search?query=${query}`))
    .then((response) => response.json())
    .then((results) => {
      setMovies(results)
      navigate("/dashboard")
    })
    }

    return(
        <div className="dash">
        <nav className="navbar bg-dark" data-bs-theme="dark">
            <Link className="movie-link" to="/addmovie">Add Movie</Link>
            <Search onSearch={handleSearch}/>
        </nav>
        <div>
          <Allmovies movies={movies} handleDeleteMovie={handleDeleteMovie}/>
        </div>
        </div>


    )
}

export default Dashboard