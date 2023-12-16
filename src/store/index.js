import { configureStore } from "@reduxjs/toolkit"

import productsListReducer from './slices/products'

const store = configureStore({
    reducer: {
        productsList: productsListReducer
    }
})

export default store