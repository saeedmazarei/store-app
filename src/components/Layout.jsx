import { Suspense } from 'react'

import { Outlet } from 'react-router-dom'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function Layout() {
    return (
        <>
            <Header />
            <Main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </Main>
            <Footer />
        </>
    )
}

export default Layout
