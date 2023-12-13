import { useTranslation } from 'react-i18next'
import { FiPhoneCall } from "react-icons/fi"

import Button from './shared/Button'
import Card from './shared/Card'

function Header() {
    const { t } = useTranslation()
    return (
        <Card style={{ height: '120px', borderTopLeftRadius: '0', borderTopRightRadius: '0' }}>
            <Button style={{ width: '107px', borderRadius: '16px' }}><FiPhoneCall />  {t('home.call')}</Button>
        </Card>
    )
}

export default Header
