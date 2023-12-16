import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    productsList: null,
    loading: false,
    searchInput: null,
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
        },
        setSearchInput: (state, action) => {
            state.searchInput = action.payload
        }
    }
})

export const { setProductsList, setLoading, setSearchInput } = productsSlice.actions

export default productsSlice.reducer

// selectors

export const selectProductsList = (state) => state.productsList.productsList
export const selectLoading = (state) => state.productsList.loading
export const selectSearchInput = (state) => state.productsList.searchInput
