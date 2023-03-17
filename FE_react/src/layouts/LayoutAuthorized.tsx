import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react"

export default function AuthorizedLayout() {

    const navigate = useNavigate()
    useEffect(() => {
        if(!localStorage.getItem('authorized')){
            navigate("/login")
        }
    }, [])

    return (
        <div>
            <Outlet/>
        </div>
    )
}