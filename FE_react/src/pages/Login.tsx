import { Link } from "react-router-dom"

export default function Login() {

    return (
        <div className="login-register-form">
            <div className="form">
                <form>
                    <h1 className="title">Login</h1>
                    <input type="text" placeholder="Name" />
                    <input type="password" placeholder="Password" />
                    <button className="btn btn-block">Login</button>
                    <p className="message">
                        Not Registered?  <Link to="/register"> Create an accout!</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}