import { lazy } from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './components/Layout'
const Home = lazy(() => import('./pages/Home'))
const ProductDetails = lazy(() => import('./pages/ProductDetails'))
const Page404 = lazy(() => import('./components/Page404'))

function App() {
    const router = createBrowserRouter([
        {
            // parent route component
            element: <Layout />,
            // your custom routing error component
            errorElement: <Page404 />,
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
