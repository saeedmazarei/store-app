import AppliedFilter from '../applyed-filters/AppliedFilters'
import styles from './ProductsList.module.scss'
import ProductItem from './product-item/ProductItem'

function ProductsList() {
    return (
        <div className={styles['products-list-container']}>
            <AppliedFilter />
            <div className={styles['product-item-container']}>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </div>
    )
}

export default ProductsList
