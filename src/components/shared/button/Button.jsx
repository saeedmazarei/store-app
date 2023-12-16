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
    children: PropTypes.node,
    style: PropTypes.object,
    onClick: PropTypes.func,
    className: PropTypes.string
}

export default Button
