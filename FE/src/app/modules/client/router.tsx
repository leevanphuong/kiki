import { RouteObject } from "react-router-dom"
import Home from "./home/home.component"
import Detail from "./detail/detail.component"
export const clientRouter: RouteObject[] = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/detail",
        element: <Detail/>
    }
]