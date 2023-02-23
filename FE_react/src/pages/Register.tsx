import { Link } from "react-router-dom"

export default function Register() {

    return (

        <div className="login-register-form ">
            <div className="form">
                <form>
                    <h1 className="title">Register</h1>
                    <input type="text" placeholder="Name" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <button className="btn btn-block">Create account</button>
                    <p className="message">
                        Already Registered?  <Link to="/login"> Login!</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}