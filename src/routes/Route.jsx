import { createBrowserRouter } from "react-router-dom";

import Root from "../layouts/root/Root";
import News from "../pages/news/News";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <News></News>
            },
            {
                path: '/login',
                element: <Login></Login>

            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default Route;