import ProductsList from './ProductsList'
import styles from './Index.module.scss'
import FilterAndSearch from './FilterAndSearch'

function Index() {
    return (
        <div className={styles["main-container"]}>
            <FilterAndSearch />
            <ProductsList />
        </div>
    )
}

export default Index
