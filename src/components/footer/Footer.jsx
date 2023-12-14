import DownFooter from './DownFooter'
import styles from './Footer.module.scss'
import TopFooter from './TopFooter'

function Footer() {
    return (
        <div className={styles['footer-container']}>
            <TopFooter />
            <DownFooter />
        </div>
    )
}

export default Footer
