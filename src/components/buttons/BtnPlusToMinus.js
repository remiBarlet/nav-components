/*
* author: Remi Barlet
* email: rbarlet@protonmail.com
* a 'plus' button which shadows on click and let a 'minus' to appear
* props: duration of the animation, color of the button and open/close situation
*/

import React from 'react'
import PropTypes from 'prop-types'
import  './BtnPlusToMinus.css'


const BtnPlusToMinus = (props) => {

    let wrapperStyle = {}
    props.height && (wrapperStyle['--height'] = `${ props.height }em`)
    let style = {}
    props.duration && (style['--duration']= `${ props.duration }ms`)
    props.btnColor && (style['--btnColor']= `${ props.btnColor }`)

    return(
        <div className='btnPlusToMinusWrapper' onClick={ props.onClick } style={ wrapperStyle } id={ props.id }>
            <div className={`btnPlusToMinus ${props.isOpen  ? 'open' : 'closed'}`}
                 style={ style } >
                <div className='btnPlusToMinus-lines'></div>
            </div>
        </div>
    )
} 

BtnPlusToMinus.propTypes = {
    id: PropTypes.string,
    onClick: PropTypes.func,
    fontSize: PropTypes.number,
    isOpen: PropTypes.bool.isRequired,
    duration: PropTypes.number,
    btnColor: PropTypes.string
}

export default BtnPlusToMinus
