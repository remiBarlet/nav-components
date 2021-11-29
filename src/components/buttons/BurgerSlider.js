/*
* author: Remi Barlet
* email: rbarlet@protonmail.com
* a burger with top and down elements rotating to form a cross on click
* while the center desappears
* props: duration, color of the burger and open/close parameter
*/

import React from 'react'
import PropTypes from 'prop-types'
import './BurgerSlider.css'

const BurgerSlider = (props) => {

    let style = {}
    props.duration && (style['--duration'] = `${ props.duration }ms`)
    props.burgerColor && (style['--burgerColor']= `${ props.burgerColor }`)

    return(
        <div className={`burger ${ props.isOpen ? 'open' : 'closed' }`} 
            style={ style } >
            <div className='burger-lines'></div>
        </div>
    )
}

BurgerSlider.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    duration: PropTypes.number,
    burgerColor: PropTypes.string
}

export default BurgerSlider