import { useTranslation } from "react-i18next"
import { CiSearch } from "react-icons/ci"
import { RxCross2 } from "react-icons/rx"

import Card from "../../shared/card/Card"
import Button from "../../shared/button/Button"
import styles from './SideBarMenu.module.scss'

function FilterAndSearch() {
    const { t } = useTranslation()
    return <Card style={{width: '100%', height: '160px'}} className={styles.card}>
        <div className={styles["text-container"]}>
            <span>{t('home.filterAndSearch')}</span>
        </div>
        <div className={styles["search-box"]}>
            <CiSearch style={{color: '#E20054'}} />
            <input type="text" />
            <RxCross2 />
        </div>
        <Button className={styles.button}>{t('home.search')}</Button>
    </Card>
}

export default FilterAndSearch
