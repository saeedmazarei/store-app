import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Layout from './components/Layout'

function App() {
    const router = createBrowserRouter([
        {
            // parent route component
            element: <Layout />,
            // child route components
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                // other pages....
                {
                    path: '/product-details',
                    element: <ProductDetails />,
                },
            ],
        },
    ])
    return <RouterProvider router={router} />
}

export default App
