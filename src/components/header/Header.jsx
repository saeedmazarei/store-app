import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FiPhoneCall } from 'react-icons/fi'
import { AiOutlineAppstore } from "react-icons/ai"
import { IoMdBook } from "react-icons/io"
import { CiSquareQuestion } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5"


import Button from '../shared/Button'
import Card from '../shared/Card'
import styles from './Header.module.scss'

function Header() {
    const { t } = useTranslation()
    return (
        <Card style={{ height: '120px', borderTopLeftRadius: '0', borderTopRightRadius: '0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button className={styles['call-button']}>
                <div className={styles['text-and-icon']}>
                    <FiPhoneCall /> <span>{t('home.call')}</span>
                </div>
            </Button>
            <div className={styles['navigation-list']}>
                <Link to=""><div className={styles['text-and-icon']}><AiOutlineAppstore /><span>{t('home.productList')}</span></div></Link>
                <Link to=""><div className={styles['text-and-icon']}><IoMdBook /><span>{t('home.getAdvice')}</span></div></Link>
                <Link to=""><div className={styles['text-and-icon']}><CiSquareQuestion /><span>{t('home.frequentlyAskedQuestions')}</span></div></Link>
                <Link to=""><div className={styles['text-and-icon']}><IoCallOutline /><span>{t('home.contactUs')}</span></div></Link>
            </div>
        </Card>
    )
}

export default Header
