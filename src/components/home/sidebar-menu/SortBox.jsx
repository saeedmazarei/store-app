import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { IoIosArrowDown } from 'react-icons/io'

import { setProductsList } from '../../../store/slices/products'
import Card from '../../shared/card/Card'
import styles from './SideBarMenu.module.scss'
import { sortProduct } from '../../../services/apis'

function SortBox() {
    const [selectedItem, setSelectedItem] = useState('')
    const dispatch = useDispatch()
    const { t } = useTranslation()

    async function sortHandler(value) {
        setSelectedItem(value)
        const response = await sortProduct(value)
        dispatch(setProductsList(response.data))
    }

    return (
        <Card style={{ width: '100%', height: '200px' }} className={styles.card}>
            <div className={`${styles['text-container']} ${styles['text-container-with-icon']}`}>
                <span>{t('home.sorting')}</span>
                <IoIosArrowDown />
            </div>
            <div className={styles['radio-button-container']}>
                <label>
                    <input
                        type="radio"
                        value="asc"
                        checked={selectedItem === 'asc'}
                        onChange={() => sortHandler('asc')}
                    />
                    <span>{t('home.numberLowToHigh')}</span>
                </label>
                <label>
                    <input
                        type="radio"
                        value="desc"
                        checked={selectedItem === 'desc'}
                        onChange={() => sortHandler('desc')}
                    />
                    <span>{t('home.numberHighToLow')}</span>
                </label>
                <label>
                    <input
                        type="radio"
                        value="descs"
                          checked={selectedItem === 'descs'}
                          onChange={() => sortHandler('descs')}
                    />
                    <span>{t('home.rankHighToLow')}</span>
                </label>
                <label>
                    <input
                        type="radio"
                        value="ascs"
                          checked={selectedItem === 'ascs'}
                          onChange={() => sortHandler('ascs')}
                    />
                    <span>{t('home.rankLowToHigh')}</span>
                </label>
            </div>
        </Card>
    )
}

export default SortBox
