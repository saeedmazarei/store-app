import { useTranslation } from 'react-i18next'
import { IoIosArrowDown } from 'react-icons/io'

import Card from '../../shared/Card'
import styles from './SideBarMenu.module.scss'

function SortBox() {
    const { t } = useTranslation()
    return (
        <Card style={{ width: '100%', height: '200px' }} className={styles.card}>
            <div className={`${styles['text-container']} ${styles['text-container-with-icon']}`}>
                <span>{t('home.sorting')}</span>
                <IoIosArrowDown />
            </div>
            <div className={styles['radio-button-container']}>
                <label>
                    <input
                        type="radio"
                        value="item1"
                        //   checked={selectedItem === 'item1'}
                        //   onChange={() => handleRadioChange('item1')}
                    />
                    <span>{t('home.numberLowToHigh')}</span>
                </label>
                <label>
                    <input
                        type="radio"
                        value="item2"
                        //   checked={selectedItem === 'item2'}
                        //   onChange={() => handleRadioChange('item2')}
                    />
                    <span>{t('home.numberHighToLow')}</span>
                </label>
                <label>
                    <input
                        type="radio"
                        value="item3"
                        //   checked={selectedItem === 'item3'}
                        //   onChange={() => handleRadioChange('item3')}
                    />
                    <span>{t('home.rankHighToLow')}</span>
                </label>
                <label>
                    <input
                        type="radio"
                        value="item4"
                        //   checked={selectedItem === 'item4'}
                        //   onChange={() => handleRadioChange('item4')}
                    />
                    <span>{t('home.rankLowToHigh')}</span>
                </label>
            </div>
        </Card>
    )
}

export default SortBox
