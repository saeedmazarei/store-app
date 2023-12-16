import PropTypes from 'prop-types'

import Card from '../../shared/card/Card'
import styles from './TitleImageCard.module.scss'

function TitleImageCard({ productDetails }) {
    return (
        <Card className={styles['title-and-image-container']}>
            <p>{productDetails?.title}</p>
            <Card className={styles['image-container']}>
                <img src={productDetails?.image} />
            </Card>
        </Card>
    )
}

TitleImageCard.propTypes = {
    productDetails: PropTypes.object,
}

export default TitleImageCard
