import { Suspense } from 'react'

import { Outlet } from 'react-router-dom'

import Header from './header/Header'
import Footer from './footer/Footer'

function Layout() {
    return (
        <>
            <Header />
            <main>
                <Suspense>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </>
    )
}

export default Layout
