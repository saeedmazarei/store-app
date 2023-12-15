import api from "./config"

export const getAllProduct = () => api.get('products')

export const sortProduct = (method) => api.get(`products?sort=${method}`)