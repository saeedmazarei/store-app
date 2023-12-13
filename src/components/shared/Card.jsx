import PropTypes from 'prop-types'

import styles from './Card.module.scss'

function Card({ children, style }) {
    return <div className={styles.card} style={style}>{children}</div>
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object.isRequired
}

export default Card
