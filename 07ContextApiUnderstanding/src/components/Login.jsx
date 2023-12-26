import React, { useContext, useEffect, useState } from "react";
import userContext from "../context/UserContext";

const Login = () => {
    const [username, setUserName ]  = useState("")
    const [password , setPassword] = useState("")

    // useContext Hook start

    const {setUser} = useContext(userContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username,password})
    }
    return (
    <div>
        <h2>Login</h2>
        <input value={username} onChange={(e) => setUserName(e.target.value) } type="text" placeholder="UserName" />
        {"            "}
        {"    "}
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
        <button onClick={handleSubmit}>Submit</button>

    </div>
    )
}

export default Login;