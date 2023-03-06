import React, { useState } from "react";

function Addmovie() {

    const [movie_year, SetMovie_year] = useState()
    const [movie_title, SetMovie_title] = useState()
    const [movie_description, SetMovie_description] = useState()

    function handleSubmit(e) {
        e.preventdefault()
    fetch(), {
        method: "POST",
    }
    body: JSON.stringify({
        title: movie_title,
        year: movie_year,
        description: movie_description
    }
    )
    .then((response) => response.json())
    }

    return(
        <form onSubmit={handleSubmit}>
            <input placeholder="Movie title" onChange={SetMovie_title(movie_title)}></input>
            <input type="text" placeholder="Movie year" onChange={SetMovie_year(movie_year)}></input>
            <input type="text" placeholder="Movie description" onChange={SetMovie_description(movie_description)}></input>
            <input type="submit"></input>
        </form>
    )

}

export default Addmovie;