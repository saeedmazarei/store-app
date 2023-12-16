import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AiOutlineAppstore } from 'react-icons/ai'
import { IoMdBook } from 'react-icons/io'
import { CiSquareQuestion } from 'react-icons/ci'
import { IoCallOutline } from 'react-icons/io5'

import styles from './Header.module.scss'

function MobileNavBar() {
    const { t } = useTranslation()
    return (
        <div className={styles['mobile-nav-container']}>
            <div className={styles["link-container"]}>
                <Link to="">
                    <div className={styles['text-and-icon']}>
                        <AiOutlineAppstore />
                        <span>{t('home.productList')}</span>
                    </div>
                </Link>
                <div className={styles.separator} />
                <Link to="">
                    <div className={styles['text-and-icon']}>
                        <IoMdBook />
                        <span>{t('home.getAdvice')}</span>
                    </div>
                </Link>
                <div className={styles.separator} />
                <Link to="">
                    <div className={styles['text-and-icon']}>
                        <CiSquareQuestion />
                        <span>{t('home.frequentlyAskedQuestions')}</span>
                    </div>
                </Link>
                <div className={styles.separator} />
                <Link to="">
                    <div className={styles['text-and-icon']}>
                        <IoCallOutline />
                        <span>{t('home.contactUs')}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default MobileNavBar
