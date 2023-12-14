import PropTypes from 'prop-types'
import styles from './Button.module.scss'

function Button({ children, style, onClick, className }) {
    return (
        <button style={style} className={`${styles.button} ${className}`} onClick={onClick}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired
}

export default Button
