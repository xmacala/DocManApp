import { useState, useEffect } from "react"
import { Link, useNavigate  } from "react-router-dom"

export default function Register() {

    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [confpassword, setConfPassword] = useState("")
    const [erros, setErrors] = useState("")

    useEffect(() => {
        if(localStorage.getItem('authorized')){
            navigate("/home")
        }
    }, [])

    async function registration(ev: { preventDefault: () => void }) {
        ev.preventDefault();
        if(name == ""){
            alert("Name is required!")
        }
        else if(password == ""){
            alert("Password is required!")
        }
        else if(password != confpassword){
            alert("Passwords does not match!")
        }
        else{
            let data = {name, password}
            let result = await fetch ("http://127.0.0.1:8000/api/users/register", {
                method:'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type":'application/json',
                    "Accept":'application/json'
                }
            })
            if(result.status == 201 || result.status == 200){
                result = await result.json();
                localStorage.setItem('authorized', JSON.stringify(result));
                navigate("/home")
            }
            else{
                alert("Something went wrong!")
            }
        }
    }

    return (

        <div className="login-register-form ">
            <div className="form">
                    <h1 className="title">Register</h1>
                    <input name="username" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Username"/>
                    <input name="password" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
                    <input name="confirmPassword" value={confpassword} onChange={(e)=>setConfPassword(e.target.value)} type="password" placeholder="Confirm Password" />
                    <button onClick={registration} className="btn btn-block">Create account</button>
                    <p className="message">
                        Already Registered?  <Link to="/login"> Login!</Link>
                    </p>
            </div>
        </div>
    )
}