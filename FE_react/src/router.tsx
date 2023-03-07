import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthorizedLayout from "./layouts/LayoutAuthorized";
import UnauthorizedLayout from "./layouts/LayoutUnauthorized";
import Documents from "./pages/Document";

import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthorizedLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/documents"/>
            },
            {
                path: '/documents',
                element: <Documents />
            },
        ]
    },
    {
        path: '/',
        element: <UnauthorizedLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    },
    {
        path: '*',
        element: <PageNotFound />
    },
])

export default router;