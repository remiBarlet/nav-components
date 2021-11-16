import React, { useState } from 'react'
import BtnPlus from './BtnPlus'
import PropTypes from 'prop-types'
import IsASmallDevice from '../utils/IsASmallDevice'
import { SMALL_DEVICE } from '../utils/config'


const MenuLine = (props) => {

    //hook to set the childrens visibles
    const [ isOpen, setIsOpen ] = useState(false)
    //hook to set the childrens allways visibles
    const [ allwaysOpen, setAllwaysOpen ] = useState(false)
    
    //prop to keep the submenu visible
    if (props.allwaysOpen) {
        setAllwaysOpen(true)
    }

    return(
        <li 
            className={ props.className } 
            onMouseLeave={ !IsASmallDevice(SMALL_DEVICE) ? (() => { isOpen && setIsOpen(!isOpen) }) : null }
        >
            <a href={ props.href } onClick={ () => setIsOpen(!isOpen) } >
                    { props.label }
            </a>
            {/*return a button if childrens exist and are not visibles */}
            { props.children != null && allwaysOpen != true ? <BtnPlus onClick={() => {setIsOpen(!isOpen)}} isOpen={isOpen} /> : null } 
            {/*return the childrens if they exist 
            in case of a small device only if isOpen is true*/}
            { props.children != null && (isOpen || allwaysOpen) ? <ul>{ props.children }</ul> : null }
        </li>
    )
}

MenuLine.propTypes = {
    className: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]), 
    allwaysOpen: PropTypes.bool.isRequired
}

export default MenuLine
