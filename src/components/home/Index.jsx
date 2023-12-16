import { useEffect, useState } from 'react'

import ProductsList from './products-list/ProductsList'
import styles from './Index.module.scss'
import { getAllProduct } from '../../services/apis'
import SideBarMenu from './sidebar-menu/SideBarMenu'
import Loading from '../shared/loading/Loading'

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
            {loading && <Loading />}
            {!loading && (
                <>
                    <SideBarMenu />
                    <ProductsList allProducts={allProducts} />
                </>
            )}
        </div>
    )
}

export default Index
