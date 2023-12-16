import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    productsList: null,
    loading: false,
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProductsList: (state, action) => {
            state.productsList = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    }
})

export const { setProductsList, setLoading } = productsSlice.actions

export default productsSlice.reducer

// selectors

export const selectProductsList = (state) => state.productsList.productsList
export const selectLoading = (state) => state.productsList.loading
