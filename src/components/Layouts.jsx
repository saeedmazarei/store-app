import { Outlet } from 'react-router-dom'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function Layouts() {
    return (
        <>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </>
    )
}

export default Layouts
