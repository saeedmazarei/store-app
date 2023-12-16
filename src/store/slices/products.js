import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    productsList: null,
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProductsList: (state, action) => {
            state.productsList = action.payload
        }
    }
})

export const { setProductsList } = productsSlice.actions

export default productsSlice.reducer

// selectors

export const selectProductsList = (state) => state.productsList.productsList
