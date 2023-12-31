import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import { getSingleProduct } from '../../services/apis'

import styles from './Index.module.scss'
import TitleImageCard from './title-and-image/TitleImageCard'
import DescriptionCard from './description/DescrptionCard'
import Directories from './directories/Directories'
import Loading from '../shared/loading/Loading'

function Index() {
    const [productDetails, setProductDetails] = useState()
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        async function getProductDetails() {
            try {
                setLoading(true)
                const response = await getSingleProduct(id)
                setProductDetails(response.data)
                setLoading(false)
            } catch {
                setLoading(false)
            }
        }
        getProductDetails()
    }, [id])

    return (
        <>
            {loading && <Loading />}
            {!loading && (
                <div className={styles['product-details-container']}>
                    <Directories productDetails={productDetails} />
                    <TitleImageCard productDetails={productDetails} />
                    <DescriptionCard productDetails={productDetails} />
                </div>
            )}
        </>
    )
}

export default Index
