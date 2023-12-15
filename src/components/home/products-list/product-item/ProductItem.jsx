import Button from '../../../shared/Button'
import Card from '../../../shared/Card'
import styles from './ProductItem.module.scss'

function ProductItem() {
    return (
        <Card className={styles.card}>
            <Card className={styles['product-image-container']}>
                <img src='./assets/images/saeed.jpeg' />
            </Card>
            <div className={styles['product-text-container']}>
                <span>درب اتوماتیک بازویی Face مدل SW2</span>
            </div>
            <Button className={styles.button}>
                مشاهده جزییات
            </Button>
        </Card>
    )
}

export default ProductItem
