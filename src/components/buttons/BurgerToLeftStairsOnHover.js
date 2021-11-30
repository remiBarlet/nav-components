/*
* author: Remi Barlet
* email: rbarlet@protonmail.com
* A burger with lines shortening and sliding on hover 
* to look like stairs to the left
* props: duration, color and open/close parameter
*/

import React from 'react'
import PropTypes from 'prop-types'
import './BurgerToLeftStairsOnHover.css'

const BurgerLeftStairs = (props) => {

    let style = {}
    props.duration && (style['--duration'] = `${ props.duration }ms`)
    props.color && (style['--burgerColor'] = `${ props.burgerColor }`)

    return(
        <div className={`burgerLeftStairs ${ props.isOpen ? 'open' : 'closed' }`}
                style={ style } >
            <div className='burgerLeftStairs-line-1'></div>
            <div className='burgerLeftStairs-line-2'></div>
            <div className='burgerLeftStairs-line-3'></div>
        </div>
    )
}

BurgerLeftStairs.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    duration: PropTypes.number,
    burgerColor: PropTypes.string
}

export default BurgerLeftStairs