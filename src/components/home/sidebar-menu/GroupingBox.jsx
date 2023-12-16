import { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { IoIosArrowDown } from 'react-icons/io'

import { setProductsList } from '../../../store/slices/products'
import Card from '../../shared/card/Card'
import styles from './SideBarMenu.module.scss'
import { categorisedProduct } from '../../../services/apis'
import CategoryCount from './CategoryCount'

function Groupingbox() {
    const [checkedItems, setCheckedItems] = useState({
        jewelery: false,
        "men's clothing": false,
        electronics: false,
    })
    const dispatch = useDispatch()
    const { t } = useTranslation()

    const handleCheckboxChange = (itemName) => {
        setCheckedItems({
            ...checkedItems,
            [itemName]: !checkedItems[itemName],
        })
    }

    useEffect(() => {
        const fetchDataForCategories = async () => {
            try {
                const selectedCategories = Object.keys(checkedItems).filter(
                    (key) => checkedItems[key],
                )
                const newProductsList = []
                for (const category of selectedCategories) {
                    const response = await categorisedProduct(category)
                    newProductsList.push(...response.data)
                }
                dispatch(setProductsList(newProductsList))
            } catch (error) {
                console.error('Error while fetching categories:', error)
            }
        }
        fetchDataForCategories()
    }, [checkedItems, dispatch])

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
                        <span>{t('home.jewelery')}</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={checkedItems["men's clothing"]}
                            onChange={() => handleCheckboxChange("men's clothing")}
                        />
                        <span>{t('home.mensClothing')}</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={checkedItems.electronics}
                            onChange={() => handleCheckboxChange('electronics')}
                        />
                        <span>{t('home.electronics')}</span>
                    </label>
                </div>
                <CategoryCount />
            </div>
        </Card>
    )
}

export default Groupingbox
