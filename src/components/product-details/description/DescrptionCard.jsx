import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import Card from '../../shared/Card'
import styles from './DescrptionCard.module.scss'

function DescriptionCard({ productDetails }) {
    const { t } = useTranslation()
    return (
        <Card className={styles['description-container']}>
            <p>{t('productDetails.technicalSpecifications')}</p>
            <div className={styles['table-container']}>
                <div className={styles['right-boxes-container']}>
                    <Card className={`${styles['technical-title']} ${styles['small-height']}`}>
                        <span>{t('productDetails.price')}</span>
                    </Card>
                    <Card className={`${styles['technical-title']} ${styles['tall-height']}`}>
                        <span>{t('productDetails.description')}</span>
                    </Card>
                    <Card className={`${styles['technical-title']} ${styles['small-height']}`}>
                        <span>{t('home.grouping')}</span>
                    </Card>
                    <Card className={`${styles['technical-title']} ${styles['small-height']}`}>
                        <span>{t('productDetails.rank')}</span>
                    </Card>
                    <Card className={`${styles['technical-title']} ${styles['small-height']}`}>
                        <span>{t('productDetails.number')}</span>
                    </Card>
                </div>
                <div className={styles['left-boxes-container']}>
                    <Card
                        className={`${styles['technical-description']} ${styles['small-height']}`}
                    >
                        <span>{productDetails?.price}</span>
                    </Card>
                    <Card
                        className={`${styles['technical-description']} ${styles['tall-height']}`}
                    >
                        <span>{productDetails?.description}</span>
                    </Card>
                    <Card
                        className={`${styles['technical-description']} ${styles['small-height']}`}
                    >
                        <span>{productDetails?.category}</span>
                    </Card>
                    <Card
                        className={`${styles['technical-description']} ${styles['small-height']}`}
                    >
                        <span>{productDetails?.rating.rate}</span>
                    </Card>
                    <Card
                        className={`${styles['technical-description']} ${styles['small-height']}`}
                    >
                        <span>{productDetails?.rating.count}</span>
                    </Card>
                </div>
            </div>
        </Card>
    )
}

DescriptionCard.propTypes = {
    productDetails: PropTypes.object,
}

export default DescriptionCard
