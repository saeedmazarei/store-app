import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FiPhoneCall } from 'react-icons/fi'
import { AiOutlineAppstore } from 'react-icons/ai'
import { IoMdBook } from 'react-icons/io'
import { CiSquareQuestion } from 'react-icons/ci'
import { IoCallOutline } from 'react-icons/io5'
import { TbPhoneCall } from 'react-icons/tb'
import { IoIosMenu } from 'react-icons/io'

import Button from '../shared/button/Button'
import Card from '../shared/card/Card'
import styles from './Header.module.scss'

function Header() {
    const { t } = useTranslation()
    return (
        <Card className={styles['header-card']}>
            <Button className={styles['call-button']}>
                <div className={styles['text-and-icon']}>
                    <FiPhoneCall /> <span>{t('home.call')}</span>
                </div>
            </Button>
            <div className={styles['mobile-icon']}>
                <IoIosMenu style={{ color: '#E20054' }} />
            </div>
            <div className={styles['mobile-icon']}>
                <TbPhoneCall style={{ color: '#E20054' }} />
            </div>
            <div className={styles['navigation-list']}>
                <Link to="">
                    <div className={styles['text-and-icon']}>
                        <AiOutlineAppstore />
                        <span>{t('home.productList')}</span>
                    </div>
                </Link>
                <Link to="">
                    <div className={styles['text-and-icon']}>
                        <IoMdBook />
                        <span>{t('home.getAdvice')}</span>
                    </div>
                </Link>
                <Link to="">
                    <div className={styles['text-and-icon']}>
                        <CiSquareQuestion />
                        <span>{t('home.frequentlyAskedQuestions')}</span>
                    </div>
                </Link>
                <Link to="">
                    <div className={styles['text-and-icon']}>
                        <IoCallOutline />
                        <span>{t('home.contactUs')}</span>
                    </div>
                </Link>
            </div>
        </Card>
    )
}

export default Header
