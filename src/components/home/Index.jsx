import { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { setProductsList, setLoading } from '../../store/slices/products'
import { selectProductsList, selectLoading } from '../../store/slices/products'
import ProductsList from './products-list/ProductsList'
import styles from './Index.module.scss'
import { getAllProduct } from '../../services/apis'
import SideBarMenu from './sidebar-menu/SideBarMenu'
import Loading from '../shared/loading/Loading'

function Index() {
    const productList = useSelector(selectProductsList)
    const loading = useSelector(selectLoading)
    const dispatch = useDispatch()

    async function getAllProductsFunction() {
        dispatch(setLoading(true))
        try {
            const response = await getAllProduct()
            dispatch(setProductsList(response.data))
            dispatch(setLoading(false))
        } catch {
            dispatch(setLoading(false))
        }
    }

    useEffect(() => {
        getAllProductsFunction()
    }, [])

    return (
        <div className={styles['main-container']}>
            <SideBarMenu />
            {loading && <Loading />}
            {!loading && (
                <>
                    <ProductsList allProducts={productList} />
                </>
            )}
        </div>
    )
}

export default Index
