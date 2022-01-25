/*
* author: Remi Barlet
* email: rbarlet@protonmail.com
* a burger with top and down elements disappearing on click
* while the center divide himself and move each part on top and bottom position
* each top and bottom element rotate to form a cross
* props: duration, color of the burger and open/close parameter
*/

import React from 'react'
import PropTypes from 'prop-types' 
import './BurgerCenterToCross.css'

const BurgerCenterToCross = (props) => {

    let wrapperStyle = {}
    props.height && (wrapperStyle['--height'] = `${ props.height }em`)
    let style= {}
    props.duration && (style['--duration']= `${ props.duration }ms`)
    props.burgerColor && (style['--burgerColor']= `${ props.burgerColor }`)

    return(
        <div className='burgerCenterToCrossWrapper' onClick={ props.onClick } style={ wrapperStyle } id={ props.id }>
            <div className={`burgerCenterToCross ${ props.isOpen ? 'open' : 'closed' }`}
            style={ style } >
                <div className='burgerCenterToCross-lines-1'></div>
                <div className='burgerCenterToCross-lines-2'></div>
                <div className='burgerCenterToCross-lines-3'></div>
            </div>
        </div>
    )
}

BurgerCenterToCross.propTypes = {
    id: PropTypes.string,
    onClick: PropTypes.func,
    fontSize: PropTypes.number,
    isOpen: PropTypes.bool.isRequired,
    duration: PropTypes.number,
    burgerColor: PropTypes.string
}


export default BurgerCenterToCross