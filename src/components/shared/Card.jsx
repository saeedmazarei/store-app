import PropTypes from 'prop-types'

import styles from './Card.module.scss'

function Card({ children, style, className }) {
    return <div className={`${styles.card} ${className}`} style={style}>{children}</div>
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object.isRequired,
    className: PropTypes.string.isRequired
}

export default Card
