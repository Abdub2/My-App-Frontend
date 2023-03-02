import React, { useState } from "react";

function MovieList() {

    const [movielist, SetMovieList] = useState()

    fetch()
    .then((response) => response.json())
    .then((data) => SetMovieList(data))
    return(
        <div>
            {movielist.map((movie) =>
                <div key={movie.id} className="card">
                    <h1>{movie.title}</h1>
                    <p>{movie.description}</p>
                    <h2>{movie.year}</h2>
                </div>
            )}
        </div>
    )

}


export default MovieList;