import { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { setProductsList } from '../../store/slices/products'
import { selectProductsList } from '../../store/slices/products'
import ProductsList from './products-list/ProductsList'
import styles from './Index.module.scss'
import { getAllProduct } from '../../services/apis'
import SideBarMenu from './sidebar-menu/SideBarMenu'
import Loading from '../shared/loading/Loading'

function Index() {
    const productList = useSelector(selectProductsList)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    async function getAllProductsFunction() {
        setLoading(true)
        try {
            const response = await getAllProduct()
            dispatch(setProductsList(response.data))
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
                    <ProductsList allProducts={productList} />
                </>
            )}
        </div>
    )
}

export default Index
