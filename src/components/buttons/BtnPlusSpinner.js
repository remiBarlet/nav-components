/*
* author: Remi Barlet
* email: rbarlet@protonmail.com
* a 'plus' button which spin on click to a cross position (405deg)
* props: duration of the animation, color of the button and open/close situation
*/

import React from 'react'
import PropTypes from 'prop-types'
import './BtnPlusSpinner.css'


const BtnPlusSpinner = (props) => {

    let style = {}
    props.duration && (style['--duration']= `${ props.duration }ms`)
    props.btnColor && (style['--btnColor']= `${ props.btnColor }`)

    return(
        <div className={`btnplusspinner ${props.isOpen  ? 'open' : 'closed'}`}
             style={ style } >
            <div className='btnplusspinner-lines'></div>
        </div>
    )
}

BtnPlusSpinner.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    duration: PropTypes.number,
    btnColor: PropTypes.string
}

export default BtnPlusSpinner