import { createBrowserRouter } from "react-router-dom";

import Root from "../layouts/root/Root";
import News from "../pages/news/News";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <News></News>
            },
        ]
    }
])

export default Route;