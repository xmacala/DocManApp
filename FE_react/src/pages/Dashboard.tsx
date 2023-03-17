import { useNavigate } from "react-router-dom"

export default function Dashboard() {

    const navigate = useNavigate()
    function logout() {
        localStorage.removeItem('authorized');
            navigate("/login")
    }

    return (
        <div>
            <div>
                    <h1 className="dashboard_title">Dashboard</h1>
                    <button onClick={logout} className="btn btn-block">Logout</button>
            </div>
        </div>
    )
}