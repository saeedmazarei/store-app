import { useEffect, useState } from 'react'

import ProductsList from './products-list/ProductsList'
import styles from './Index.module.scss'
import FilterAndSearch from './filters-and-search/FilterAndSearch'
import { getAllProduct } from '../../services/apis'

function Index() {
    const [allProducts, setAllProducts] = useState()
    const [loading, setLoading] = useState(false)

    async function getAllProductsFunction() {
        setLoading(true)
        try {
            const response = await getAllProduct()
            setAllProducts(response.data)
            setLoading(false)
        } catch {
            setLoading(false)
        }
    }

    useEffect(() => {
        getAllProductsFunction()
    }, [])

    return (
        <div className={styles['main-container']}>
            {loading && <img src='./assets/images/loading.gif' alt="Loading" />}
            {!loading && (
                <>
                    <FilterAndSearch />
                    <ProductsList allProducts={allProducts} />
                </>
            )}
        </div>
    )
}

export default Index
