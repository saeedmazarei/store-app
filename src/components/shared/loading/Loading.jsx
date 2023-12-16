import Card from "../card/Card"
import loadingImage from '/assets/images/loading.gif'
import styles from './Loading.module.scss'

function Loading() {
    return <Card className={styles['loading-container']}><img src={loadingImage} alt="Loading" /></Card>
}

export default Loading
