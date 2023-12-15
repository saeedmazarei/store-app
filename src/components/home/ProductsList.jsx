import ApplyedFilter from './ApplyedFilters'
import styles from './ProductsList.module.scss'

function ProductsList() {
    return <div className={styles["products-list-container"]}>
        <ApplyedFilter />
    </div>
}

export default ProductsList
