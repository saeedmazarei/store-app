import React from 'react'
import ReactDOM from 'react-dom/client'

import { I18nextProvider } from 'react-i18next'
import i18n from './i18n/index.js'

import App from './App.jsx'
import ReduxStoreProvider from './providers/ReduxStoreProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ReduxStoreProvider>
            <I18nextProvider i18n={i18n}>
                <App />
            </I18nextProvider>
        </ReduxStoreProvider>
    </React.StrictMode>,
)
