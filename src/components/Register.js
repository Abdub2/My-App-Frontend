import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

    const navigate = useNavigate()
    const [first_name, Setfirst_name] = useState("")
    const [last_name, Setlast_name] = useState("")
    const [email, SetEmail] = useState("")
    const [password, SetPassword] = useState("")

    function handleAdd(e) {
        e.preventDefault()

    fetch(`${process.env.REACT_APP_BASE_URL}`.concat("/auth/register"), {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password
    })
    })
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        navigate("/dashboard")
    })
    .catch(error => console.error(error))
    }

    return(
        <form className="form-wrap" onSubmit={e => handleAdd(e)}>
            <input type="hidden" name="movie[user_id]" value="<%= @user.id %>"></input>
            <label>First Name:</label>
            <input type="text" value={first_name} onChange={(e) => Setfirst_name(e.target.value)}></input>
            <label>Last Name:</label>
            <input type="text" value={last_name} onChange={(e) => Setlast_name(e.target.value)}></input>
            <label>Email:</label>
            <input type="text" value={email} onChange={(e) => SetEmail(e.target.value)}></input>
            <label>Password:</label>
            <input type="text"  value={password} onChange={(e) => SetPassword(e.target.value)}></input>
            <input type="submit" value="Add User"></input>
      </form>
    )
}

export default Register;