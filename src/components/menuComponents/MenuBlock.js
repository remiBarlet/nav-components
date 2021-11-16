import React from 'react'
import PropTypes  from 'prop-types'

const MenuBlock = (props) => {
    return(
        <li className={ props.className }>
            { props.children != null ? 
            <ul>
                { props.children }
            </ul>
            : null }
        </li>
    )
}

MenuBlock.propTypes = {
    className: PropTypes.string.isRequired
}

export default MenuBlock