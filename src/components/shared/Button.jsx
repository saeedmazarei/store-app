import PropTypes from 'prop-types'
import styles from './Button.module.scss'

function Button({ children, style }) {
    return <button style={style} className={styles.button}>{children}</button>
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object.isRequired
}

export default Button
