import { Link } from 'react-router-dom'

import { useTranslation } from 'react-i18next'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

import styles from './Footer.module.scss'

function Footer() {
    const { t } = useTranslation()

    return (
        <div className={styles['footer-container']}>
            <div className={styles['footer-top']}>
                <div
                    className={`${styles['footer-item-container']} ${styles['first-footer-item-container']}`}
                >
                    <span>{t('home.answeringTime')}</span>
                </div>
                <div className={styles['footer-item-container']}>
                    <h3>{t('home.quickAccess')}</h3>
                    <ul>
                        <Link to="">
                            <li>{t('home.aboutUs')}</li>
                        </Link>
                        <Link to="">
                            <li>{t('home.blog')}</li>
                        </Link>
                        <Link to="">
                            <li>{t('home.contactUs')}</li>
                        </Link>
                        <Link to="">
                            <li>{t('home.afterSaleService')}</li>
                        </Link>
                    </ul>
                </div>
                <div className={styles['footer-item-container']}>
                    <h3>{t('home.siteGuid')}</h3>
                    <ul>
                        <Link to="">
                            <li>{t('home.termsAndConditions')}</li>
                        </Link>
                        <Link to="">
                            <li>{t('home.getAdvice')}</li>
                        </Link>
                        <Link to="">
                            <li>{t('home.criticsAndSuggestions')}</li>
                        </Link>
                    </ul>
                </div>
                <div className={styles['footer-item-container']}>
                    <h3>{t('home.socialNetworks')}</h3>
                    <ul>
                        <li>
                            <div className={styles['social-media-icon-container']}>
                                <FaTelegramPlane style={{ color: 'white' }} />
                            </div>
                            <Link to="">
                                <span>{t('home.telegram')}</span>
                            </Link>
                        </li>
                        <li>
                            <div className={styles['social-media-icon-container']}>
                                <FaInstagram style={{ color: 'white' }} />
                            </div>
                            <Link to="">
                                <span>{t('home.instagram')}</span>
                            </Link>
                        </li>
                        <li>
                            <div className={styles['social-media-icon-container']}>
                                <FaLinkedinIn style={{ color: 'white' }} />
                            </div>
                            <Link to="">
                                <span>{t('home.linkdin')}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles['footer-down']}>
                <div className={styles['footer-down-container']}>
                    <div className={styles['copywrite-container']}>{t('home.copyWriteTetx')}</div>
                    <div className={styles['social-medias-icon-container']}>
                        <Link to="">
                            <div
                                className={`${styles['social-media-icon-container']} ${styles.red}`}
                            >
                                <FaTelegramPlane style={{ color: 'white' }} />
                            </div>
                        </Link>
                        <Link to="">
                            <div
                                className={`${styles['social-media-icon-container']} ${styles.red}`}
                            >
                                <FaInstagram style={{ color: 'white' }} />
                            </div>
                        </Link>
                        <Link to="">
                            <div
                                className={`${styles['social-media-icon-container']} ${styles.red}`}
                            >
                                <FaTwitter style={{ color: 'white' }} />
                            </div>
                        </Link>
                        <Link to="">
                            <div
                                className={`${styles['social-media-icon-container']} ${styles.red}`}
                            >
                                <FaYoutube style={{ color: 'white' }} />
                            </div>
                        </Link>
                        <Link to="">
                            <div
                                className={`${styles['social-media-icon-container']} ${styles.red}`}
                            >
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
        </div>
    )
}

export default Footer
