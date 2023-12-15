import { useTranslation } from 'react-i18next'
import { IoIosArrowDown } from 'react-icons/io'

import Card from '../../shared/Card'
import styles from './SideBarMenu.module.scss'

function Groupingbox() {
    const { t } = useTranslation()
    return (
        <Card style={{ width: '100%', height: '180px' }} className={styles.card}>
            <div className={`${styles['text-container']} ${styles['text-container-with-icon']}`}>
                <span>{t('home.grouping')}</span>
                <IoIosArrowDown />
            </div>
            <div className={styles['grouping-and-number-box-container']}>
                <div
                    className={`${styles['radio-button-container']} ${styles['check-box-container']}`}
                >
                    <label>
                        <input
                            type="checkbox"
                            // checked={checkedItems.item1}
                            // onChange={() => handleCheckboxChange('item1')}
                        />
                        <span>{t('home.building')}</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            // checked={checkedItems.item2}
                            // onChange={() => handleCheckboxChange('item2')}
                        />
                        <span>{t('home.health')}</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            // checked={checkedItems.item3}
                            // onChange={() => handleCheckboxChange('item3')}
                        />
                        <span>{t('home.factory')}</span>
                    </label>
                </div>
                <div className={styles['number-box-container']}>
                    <div className={styles['number-box']}>12</div>
                    <div className={styles['number-box']}>12</div>
                    <div className={styles['number-box']}>12</div>
                </div>
            </div>
        </Card>
    )
}

export default Groupingbox
