import { useEffect, useState } from 'react'

import { useTranslation } from 'react-i18next'
import { IoIosArrowDown } from 'react-icons/io'

import Card from '../../shared/Card'
import styles from './SideBarMenu.module.scss'
import { categorisedProduct } from '../../../services/apis'

function Groupingbox() {
    const [checkedItems, setCheckedItems] = useState({
        jewelery: false,
        "men's clothing": false,
        electronics: false,
    })
    const { t } = useTranslation()

    const handleCheckboxChange = (itemName) => {
        setCheckedItems({
            ...checkedItems,
            [itemName]: !checkedItems[itemName],
        })
    }

    useEffect(() => {
        const selectedCategories = Object.keys(checkedItems).filter((key) => checkedItems[key])
        selectedCategories.forEach(async (category) => {
            try {
                const response = await categorisedProduct(category)
                console.log(response.data)
            } catch (error) {
                console.error('Error while fetching category:', category, error)
            }
        })
    }, [checkedItems])

    return (
        <Card style={{ width: '100%', height: '180px' }} className={styles.card}>
            <div className={`${styles['text-container']} ${styles['text-container-with-icon']}`}>
                <span>{t('home.grouping')}</span>
                <IoIosArrowDown />
            </div>
            <div className={styles['grouping-and-number-box-container']}>
                <div
                    className={`${styles['radio-button-container']} ${styles['check-box-container']}`}
                >
                    <label>
                        <input
                            type="checkbox"
                            checked={checkedItems.jewelery}
                            onChange={() => handleCheckboxChange('jewelery')}
                        />
                        <span>{t('home.building')}</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={checkedItems["men's clothing"]}
                            onChange={() => handleCheckboxChange("men's clothing")}
                        />
                        <span>{t('home.health')}</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={checkedItems.electronics}
                            onChange={() => handleCheckboxChange('electronics')}
                        />
                        <span>{t('home.factory')}</span>
                    </label>
                </div>
                <div className={styles['number-box-container']}>
                    <div className={styles['number-box']}>12</div>
                    <div className={styles['number-box']}>12</div>
                    <div className={styles['number-box']}>12</div>
                </div>
            </div>
        </Card>
    )
}

export default Groupingbox
