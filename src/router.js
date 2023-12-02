import { AboutPage } from "./pages/AboutPage"
import MainPage from "./pages/MainPage"
import ParamPage from "./pages/ParamPage"

const router = [
    {
        element: <MainPage/>,
        path: '/'
    },
    {
        element: <AboutPage/>,
        path: '/about'
    },
    {
        element: <ParamPage/>,
        path: 'facts/:factId'
    }
]
export default router