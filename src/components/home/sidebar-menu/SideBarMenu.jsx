import Card from '../../shared/Card'
import FilterAndSearch from './FilterAndSearch'
import styles from './SideBarMenu.module.scss'
import SortBox from './SortBox'

function SideBarMenu() {
    return <div className={styles['side-bar-container']}>
        <FilterAndSearch />
        <SortBox />
        <Card style={{width: '100%', height: '180px'}} />
    </div>
}

export default SideBarMenu
