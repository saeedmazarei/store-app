import { Suspense } from 'react'

import { Outlet } from 'react-router-dom'

import Header from './header/Header'
import Footer from './Footer'

function Layout() {
    return (
        <>
            <Header />
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </>
    )
}

export default Layout
