import { useTranslation } from 'react-i18next'

import Footer from './footer/Footer'
import Header from './header/Header'
import Button from './shared/button/Button'
import { Link } from 'react-router-dom'

function Page404() {
    const { t } = useTranslation()
    return (
        <>
            <Header />
            <main>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '500px',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <h1>{t('notFoundPage.404')}</h1>
                    <h2>{t('notFoundPage.notFound')}</h2>
                    <Link to="/">
                        <Button style={{marginTop: '20px', borderRadius: '16px', padding: '10px', cursor: 'pointer'}}>{t('notFoundPage.backToHome')}</Button>
                    </Link>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Page404
