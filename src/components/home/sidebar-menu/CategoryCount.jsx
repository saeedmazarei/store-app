import { useSelector } from 'react-redux'

import { selectProductsList } from '../../../store/slices/products'
import styles from './SideBarMenu.module.scss'

function CategoryCount() {
    const productsList = useSelector(selectProductsList)
    const categoryCount = productsList?.reduce((acc, item) => {
        acc[item.category] = (acc[item.category] || 0) + 1
        return acc
    }, {})
    return (
        <div className={styles['number-box-container']}>
            <div className={styles['number-box']}>{categoryCount?.jewelery}</div>
            <div className={styles['number-box']}>{categoryCount?.["men's clothing"]}</div>
            <div className={styles['number-box']}>{categoryCount?.electronics}</div>
        </div>
    )
}

export default CategoryCount
