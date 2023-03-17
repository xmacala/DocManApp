import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Login() {

    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    async function login(ev: { preventDefault: () => void }) {
        ev.preventDefault();
        let data = {name, password}
        let result = await fetch ("http://127.0.0.1:8000/api/users/login", {
            method:'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })
        try{
            result = await result.json();
                localStorage.setItem('authorized', JSON.stringify(result));
                navigate("/home")  
        }
        catch{
            alert("User does not exists!")
        }
    }


    return (
        <div className="login-register-form">
            <div className="form">
                    <h1 className="title">Login</h1>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" />
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
                    <button onClick={login} className="btn btn-block">Login</button>
                    <p className="message">
                        Not Registered?  <Link to="/register"> Create an accout!</Link>
                    </p>
            </div>
        </div>
    )
}

