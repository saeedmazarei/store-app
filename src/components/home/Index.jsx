import ProductsList from './products-list/ProductsList'
import styles from './Index.module.scss'
import FilterAndSearch from './filters-and-search/FilterAndSearch'

function Index() {
    return (
        <div className={styles["main-container"]}>
            <FilterAndSearch />
            <ProductsList />
        </div>
    )
}

export default Index
