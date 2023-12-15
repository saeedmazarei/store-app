import PropTypes from 'prop-types'

import AppliedFilter from '../applyed-filters/AppliedFilters'
import styles from './ProductsList.module.scss'
import ProductItem from './product-item/ProductItem'

function ProductsList({ allProducts }) {
    return (
        <div className={styles['products-list-container']}>
            <AppliedFilter />
            <div className={styles['product-item-container']}>
                {allProducts?.map((item) => (
                    <ProductItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

ProductsList.propTypes = {
    allProducts: PropTypes.array.isRequired,
}

export default ProductsList
