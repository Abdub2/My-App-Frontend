import React from "react";
import { Link } from "react-router-dom";

function Allmovies({ movies, handleDeleteMovie }) {

    function handleDelete(id) {
        fetch(`${process.env.REACT_APP_BASE_URL}`.concat(`movies/destroy/${id}`), {
            method: "DELETE",
        })

        handleDeleteMovie(id)
      }

    return(
        <div className="card"  >
            {movies.map((movie) =>
                <div key={movie.id} className="card-body"  >
                    <h1>{movie.title}</h1>
                    <p>{movie.description}</p>
                    <img className="card-img-top" src={movie.movie_url} alt={movie.movie_url}></img>
                    <h2>{movie.year}</h2>
                    {movie.originally_fetched === false && (
                        <button className="cdbtn" onClick={() => handleDelete(movie.id)}>Delete</button>
                    )}
                    {movie.originally_fetched === false && (
                        <Link to={`/update/${movie.id}`}>Update</Link>
                    )}
                </div>
            )}
        </div>
    )
}

export default Allmovies;