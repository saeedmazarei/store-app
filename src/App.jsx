import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Layouts from './components/Layouts'

function App() {
    const router = createBrowserRouter([
        {
            // parent route component
            element: <Layouts />,
            // child route components
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                // other pages....
                {
                    path: '/about',
                    element: <ProductDetails />,
                },
            ],
        },
    ])
    return <RouterProvider router={router} />
}

export default App
