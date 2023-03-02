function Register() {

    const [first_name, Setfirst_name] = useState("")
    const [last_name, Setlast_name] = useState("")
    const [email, SetEmail] = useState("")
    const [password, SetPassword] = useState("")

    function handleAdd() {
    fetch(), {
        method: "POST",
    }
    body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password
    })
    }

    return(
        <form onChange={handleAdd}>
            <input placeholder="Insert your first name" onChange={Setfirst_name(first_name)}></input>
            <input type="text" placeholder="Insert your last name" onChange={Setlast_name(last_name)}></input>
            <input type="text" placeholder="Insert your email" onChange={SetEmail(email)}></input>
            <input type="text" placeholder="Create your password" onChange={SetPassword(password)}></input>
            <input type="submit"></input>
        </form>
    )
}

export default Register;