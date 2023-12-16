import PropTypes from 'prop-types'

import { GoHome } from 'react-icons/go'
import { IoIosArrowBack } from 'react-icons/io'
import { useTranslation } from 'react-i18next'

import styles from './Directories.module.scss'
import { Link } from 'react-router-dom'

function Directories({ productDetails }) {
    const { t } = useTranslation()
    return (
        <div className={styles['directories-container']}>
            <Link to='/'><GoHome style={{ color: '#6883A1' }} /></Link>
            <IoIosArrowBack style={{ color: '#6883A1', marginRight: '0.5%' }} />
            <span>{t('home.productList')}</span>
            <IoIosArrowBack style={{ color: '#6883A1', marginRight: '0.5%' }} />
            <span>{productDetails?.title}</span>
        </div>
    )
}

Directories.propTypes = {
    productDetails: PropTypes.object,
}

export default Directories
