import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { IoIosArrowBack } from 'react-icons/io'

import Button from '../../../shared/button/Button'
import Card from '../../../shared/card/Card'
import styles from './ProductItem.module.scss'

function ProductItem({ item }) {
    const { t } = useTranslation()
    return (
        <Card className={styles.card}>
            <Card className={styles['product-image-container']}>
                <img src={item.image} />
            </Card>
            <div className={styles['product-text-container']}>
                <span>{item.title}</span>
            </div>
            <Link to={`/product-details/${item.id}`}>
                <Button className={styles.button}>
                    {t('home.detail')} <IoIosArrowBack />
                </Button>
            </Link>
        </Card>
    )
}

ProductItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default ProductItem
