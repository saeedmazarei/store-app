import { useTranslation } from 'react-i18next'
import { FiPhoneCall } from 'react-icons/fi'

import Button from '../shared/Button'
import Card from '../shared/Card'
import styles from './Header.module.scss'

function Header() {
    const { t } = useTranslation()
    return (
        <Card style={{ height: '120px', borderTopLeftRadius: '0', borderTopRightRadius: '0' }}>
            <Button style={{ width: '107px', borderRadius: '16px' }}>
                <div className={styles['button-content-container']}>
                    <FiPhoneCall /> <span>{t('home.call')}</span>
                </div>
            </Button>
        </Card>
    )
}

export default Header
