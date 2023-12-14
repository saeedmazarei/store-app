import { Link } from 'react-router-dom'

import { useTranslation } from 'react-i18next'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

import styles from './Footer.module.scss'

function DownFooter() {
    const { t } = useTranslation()
    return (
        <div className={styles['footer-down']}>
            <div className={styles['footer-down-container']}>
                <div className={styles['copywrite-container']}>{t('home.copyWriteTetx')}</div>
                <div className={styles['social-medias-icon-container']}>
                    <Link to="">
                        <div className={`${styles['social-media-icon-container']} ${styles.red}`}>
                            <FaTelegramPlane style={{ color: 'white' }} />
                        </div>
                    </Link>
                    <Link to="">
                        <div className={`${styles['social-media-icon-container']} ${styles.red}`}>
                            <FaInstagram style={{ color: 'white' }} />
                        </div>
                    </Link>
                    <Link to="">
                        <div className={`${styles['social-media-icon-container']} ${styles.red}`}>
                            <FaTwitter style={{ color: 'white' }} />
                        </div>
                    </Link>
                    <Link to="">
                        <div className={`${styles['social-media-icon-container']} ${styles.red}`}>
                            <FaYoutube style={{ color: 'white' }} />
                        </div>
                    </Link>
                    <Link to="">
                        <div className={`${styles['social-media-icon-container']} ${styles.red}`}>
                            <FaLinkedinIn style={{ color: 'white' }} />
                        </div>
                    </Link>
                </div>
            </div>
            <div className={styles['enamad-container']}>
                <div className={styles['enamad-item']}>
                    <img src="/assets/images/enamad1.png" />
                </div>
                <div className={styles['enamad-item']}>
                    <img src="/assets/images/enamad2.png" />
                </div>
            </div>
        </div>
    )
}

export default DownFooter
