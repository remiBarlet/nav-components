/*
* author: Remi Barlet
* email: rbarlet@protonmail.com
* A burger with lines shortening and sliding on hover 
* to look like stairs to the right
* props: duration, color and open/close parameter
*/

import React from 'react'
import PropTypes from 'prop-types'
import './BurgerToRightStairsOnHover.css'

const BurgerRightStairs = (props) => {

    let wrapperStyle = {}
    props.height && (wrapperStyle['--height'] = `${ props.height }em`)
    let style = {}
    props.duration && (style['--duration'] = `${ props.duration }ms`)
    props.color && (style['--burgerColor'] = `${ props.burgerColor }`)

    return(

        <div className='burgerRightStairsWrapper' onClick={  props.onClick } style={ wrapperStyle }>
            <div className={`burgerRightStairs ${ props.isOpen ? 'open' : 'closed' }`}
                    style={ style } >
                <div className='burgerRightStairs-line-1'></div>
                <div className='burgerRightStairs-line-2'></div>
                <div className='burgerRightStairs-line-3'></div>
            </div>
        </div>
    )
}

BurgerRightStairs.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
    duration: PropTypes.number,
    fontSize: PropTypes.number,
    burgerColor: PropTypes.string
}

export default BurgerRightStairs