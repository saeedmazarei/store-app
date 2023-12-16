import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import { getSingleProduct } from '../../services/apis'

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

    return <h1>Product details</h1>
}

export default Index
