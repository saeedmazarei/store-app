import FilterAndSearch from './FilterAndSearch'
import Groupingbox from './GroupingBox'
import styles from './SideBarMenu.module.scss'
import SortBox from './SortBox'

function SideBarMenu() {
    return <div className={styles['side-bar-container']}>
        <FilterAndSearch />
        <SortBox />
        <Groupingbox />
    </div>
}

export default SideBarMenu
