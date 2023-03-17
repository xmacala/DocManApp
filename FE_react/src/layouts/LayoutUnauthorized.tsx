import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react"

export default function UnauthorizedLayout() {

    const navigate = useNavigate()
    useEffect(() => {
        if(localStorage.getItem('authorized')){
            navigate("/home")
        }
    }, [])

    return (
        <div>
            <Outlet/>
        </div>
    )
}