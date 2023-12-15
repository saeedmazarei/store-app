import Card from '../../shared/Card'
import styles from './SideBarMenu.module.scss'

function SideBarMenu() {
    return <div className={styles['side-bar-container']}>
        <Card style={{width: '100%', height: '160px'}} />
        <Card style={{width: '100%', height: '200px'}} />
        <Card style={{width: '100%', height: '180px'}} />
    </div>
}

export default SideBarMenu
