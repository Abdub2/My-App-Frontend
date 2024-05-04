import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Addmovie() {

    const navigate = useNavigate()
    const [movie_year, SetMovie_year] = useState("")
    const [movie_title, SetMovie_title] = useState("")
    const [movie_description, SetMovie_description] = useState("")
    const [movie_url, SetMovie_url] = useState("")


    function handleAdd(e) {
        e.preventDefault()

    fetch(`${process.env.REACT_APP_BASE_URL}`.concat('/create'), {
    method: 'POST',
    body: JSON.stringify({
        title: movie_title,
        year: movie_year,
        description: movie_description,
        movie_url: movie_url
    })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        navigate("/dashboard")
    })
    .catch(error => console.error(error))
    }

    return(
        <form className="form-wrap" onSubmit={e => handleAdd(e)}>
            <input placeholder="Movie title" value={movie_title} onChange={e => SetMovie_title(e.target.value)} required></input>
            <input type="integer" placeholder="Movie year" value={movie_year}  onChange={e => SetMovie_year(e.target.movie_year)} required></input>
            <input type="text" placeholder="Movie description" value={movie_description}  onChange={e => SetMovie_description(e.target.value)} required></input>
            <input type="text" placeholder="Enter movie url" value={movie_url} onChange={e => SetMovie_url(e.target.value)}></input>
            <input type="submit"></input>
        </form>
    )

}

export default Addmovie;