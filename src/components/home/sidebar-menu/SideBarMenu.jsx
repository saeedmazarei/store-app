import Card from '../../shared/Card'
import FilterAndSearch from './FilterAndSearch'
import styles from './SideBarMenu.module.scss'

function SideBarMenu() {
    return <div className={styles['side-bar-container']}>
        <FilterAndSearch />
        <Card style={{width: '100%', height: '200px'}} />
        <Card style={{width: '100%', height: '180px'}} />
    </div>
}

export default SideBarMenu
