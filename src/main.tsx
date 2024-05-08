import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/home";
import Map from "./pages/map";



const router= createBrowserRouter([
    {
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'on-map/:id',
                element: <Map />
            }
        ]
    },
])


ReactDOM.createRoot(document.getElementById('root')!).render(
<RouterProvider router={router}>
</RouterProvider>
)
