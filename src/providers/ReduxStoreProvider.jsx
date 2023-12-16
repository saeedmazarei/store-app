import { Provider } from 'react-redux'

import store from '../store'

// eslint-disable-next-line react/prop-types
function ReduxStoreProvider({ children }) {
    return <Provider store={store}>{children}</Provider>
}

export default ReduxStoreProvider