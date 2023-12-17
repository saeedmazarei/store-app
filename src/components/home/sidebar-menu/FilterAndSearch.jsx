import { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { CiSearch } from 'react-icons/ci'
import { RxCross2 } from 'react-icons/rx'

import { setProductsList, setSearchInput } from '../../../store/slices/products'
import { selectProductsList } from '../../../store/slices/products'
import Card from '../../shared/card/Card'
import Button from '../../shared/button/Button'
import styles from './SideBarMenu.module.scss'

function FilterAndSearch() {
    const [productsHistory] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const productList = useSelector(selectProductsList)
    const dispatch = useDispatch()
    const { t } = useTranslation()

    productsHistory.push(productList)

    function searchHandler() {
        const filteredArray = productList.filter((item) =>
            item.title.toLowerCase().includes(searchValue),
        )
        dispatch(setProductsList(filteredArray))
        dispatch(setSearchInput(searchValue))
    }

    const searchAssignHandler = (value) => setSearchValue(value.target.value)

    function clearSearch() {
        setSearchValue('')
        const filteredArray = productsHistory.filter((item) => item && item.length > 0)
        dispatch(setProductsList(filteredArray[0]))
        dispatch(setSearchInput(null))
    }

    return (
        <Card style={{ width: '100%', height: '160px' }} className={styles.card}>
            <div className={styles['text-container']}>
                <span>{t('home.filterAndSearch')}</span>
            </div>
            <div className={styles['search-box']}>
                <CiSearch style={{ color: '#E20054' }} />
                <input type="text" onChange={searchAssignHandler} value={searchValue} />
                {searchValue && <RxCross2 onClick={clearSearch} />}
            </div>
            <Button className={styles.button} onClick={searchHandler}>
                {t('home.search')}
            </Button>
        </Card>
    )
}

export default FilterAndSearch
