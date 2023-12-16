import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { CiSearch } from 'react-icons/ci'
import { RxCross2 } from 'react-icons/rx'

import { setSearchInput } from '../../../store/slices/products'
import { selectSearchInput } from '../../../store/slices/products'
import Card from '../../shared/card/Card'
import styles from './AppliedFilters.module.scss'

function AppliedFilter() {
    const searchInput = useSelector(selectSearchInput)
    const dispatch = useDispatch()
    const { t } = useTranslation()

    function clearSearchHandler() {
        dispatch(setSearchInput(null))
    }

    return (
        <Card className={styles.card}>
            <p>{t('home.appliedFilter')}</p>
            {searchInput && (
                <div className={styles['search-box-container']}>
                    <CiSearch style={{ color: '#E20054' }} />
                    <span type="text">{searchInput}</span>
                    <RxCross2 onClick={clearSearchHandler} />
                </div>
            )}
        </Card>
    )
}

export default AppliedFilter
