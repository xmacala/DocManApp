import { Navigate, Outlet } from "react-router-dom";

export default function UnauthorizedLayout() {

    return (
        <div>
            <Outlet/>
        </div>
    )
}