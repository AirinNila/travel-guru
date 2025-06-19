import { createBrowserRouter } from "react-router-dom";

import Root from "../layouts/root/Root";
import News from "../pages/news/News";
import Login from "../pages/login/Login";

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

            }
        ]
    }
])

export default Route;