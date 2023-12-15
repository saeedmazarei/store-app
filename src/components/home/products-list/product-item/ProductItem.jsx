import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import Button from '../../../shared/Button'
import Card from '../../../shared/Card'
import styles from './ProductItem.module.scss'

function ProductItem({ item }) {
    const { t } = useTranslation()
    console.log(item)
    return (
        <Card className={styles.card}>
            <Card className={styles['product-image-container']}>
                <img src={item.image} />
            </Card>
            <div className={styles['product-text-container']}>
                <span>{item.title}</span>
            </div>
            <Button className={styles.button}>{t('home.detail')}</Button>
        </Card>
    )
}

ProductItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default ProductItem
