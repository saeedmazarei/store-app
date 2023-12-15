import Card from '../../shared/Card'
import styles from './FilterAndSearch.module.scss'

function FilterAndSearch() {
    return <div className={styles['filter-search-container']}>
        <Card style={{width: '100%', height: '160px'}} />
        <Card style={{width: '100%', height: '200px'}} />
        <Card style={{width: '100%', height: '180px'}} />
    </div>
}

export default FilterAndSearch
